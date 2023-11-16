import { useMemo, useState, useEffect } from 'react';
import { Checkbox, ExpandableCell, SelectRow, Table, TableCell } from '../widgets';
import type { UseBrowserImplReturnValue } from './useBrowser';
import type { ColumnDef, ExpandedState, FilterFn, RowSelectionState } from '@tanstack/react-table';
import { flexRender, getCoreRowModel, getExpandedRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table';
import { useEditorContext, useMeta } from '../../context';
import type { JavaType } from '@axonivy/inscription-protocol';
export const DATATYPE_BROWSER_ID = 'datatype' as const;

export const useDataTypeBrowser = (onDoubleClick: () => void): UseBrowserImplReturnValue => {
  const [value, setValue] = useState('datatype');
  return {
    id: DATATYPE_BROWSER_ID,
    name: 'Datatype',
    content: <DataTypeBrowser value={value} onChange={setValue} onDoubleClick={onDoubleClick} />,
    accept: () => value
  };
};

const DataTypeBrowser = (props: { value: string; onChange: (value: string) => void; onDoubleClick: () => void }) => {
  const { context } = useEditorContext();

  const [mainFilter, setMainFilter] = useState('');
  const { data: allDatatypes, isFetching } = useMeta('meta/scripting/allTypes', { context, limit: 150, type: mainFilter }, []);

  const [dynamicTypes, setDynamicTypes] = useState<JavaType[]>([]);

  const [typeAsList, setTypeAsList] = useState(false);

  const [showHelper, setShowHelper] = useState(false);

  useEffect(() => {
    if (mainFilter.length > 0) {
      allDatatypes.sort((a, b) => a.simpleName.localeCompare(b.simpleName));
    }
    setDynamicTypes(allDatatypes);
  }, [allDatatypes, mainFilter]);

  useEffect(() => {
    setRowSelection({});
  }, [dynamicTypes.length, mainFilter]);

  const columns = useMemo<ColumnDef<JavaType>[]>(
    () => [
      {
        accessorFn: row => row.simpleName,
        id: 'simpleName',
        cell: cell => {
          return <ExpandableCell cell={cell} title={cell.row.original.simpleName} additionalInfo={cell.row.original.packageName} />;
        }
      }
    ],
    []
  );

  const [expanded, setExpanded] = useState<ExpandedState>(true);
  const [globalFilter, setGlobalFilter] = useState(mainFilter);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const regexFilter: FilterFn<JavaType> = (row, columnId, filterValue) => {
    const cellValue = row.original.simpleName || '';
    const regexPattern = new RegExp(filterValue.replace(/\*/g, '.*'), 'i'); // Convert * to .*
    return regexPattern.test(cellValue);
  };

  const tableDynamic = useReactTable({
    data: dynamicTypes,
    columns: columns,
    state: {
      expanded,
      globalFilter,
      rowSelection
    },
    globalFilterFn: regexFilter,
    filterFromLeafRows: true,
    enableRowSelection: true,
    enableMultiRowSelection: false,
    enableSubRowSelection: false,
    enableFilters: true,
    onExpandedChange: setExpanded,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });

  const addListGeneric = (value: JavaType, typeAsList: boolean) => {
    if (typeAsList) {
      return 'java.util.List<' + value.fullQualifiedName + '>';
    } else {
      return value.fullQualifiedName;
    }
  };

  useEffect(() => {
    if (Object.keys(rowSelection).length !== 1) {
      props.onChange('');
      setShowHelper(false);
      return;
    }
    let selectedRow = undefined;
    selectedRow = tableDynamic.getRowModel().rowsById[Object.keys(rowSelection)[0]];

    setShowHelper(true);
    props.onChange(addListGeneric(selectedRow.original, typeAsList));
  }, [props, props.onChange, rowSelection, tableDynamic, typeAsList]);

  const [debouncedFilterValue, setDebouncedFilterValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFilterValue(globalFilter);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [globalFilter]);

  useEffect(() => {
    if (debouncedFilterValue.length > 0) {
      setMainFilter(debouncedFilterValue);
    } else {
      setMainFilter('');
    }
    setExpanded(true);
  }, [debouncedFilterValue]);

  return (
    <>
      <Table
        search={{
          value: globalFilter,
          onChange: newFilterValue => {
            setGlobalFilter(newFilterValue);
          }
        }}
      >
        {mainFilter.length > 0 && (
          <tbody>
            {!isFetching &&
              tableDynamic.getRowModel().rows.map(row => (
                <SelectRow key={row.id} row={row}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </SelectRow>
              ))}
          </tbody>
        )}
      </Table>
      {isFetching && (
        <div className='loader'>
          <p>loading more types...</p>
        </div>
      )}
      <Checkbox label='Use Type as List' value={typeAsList} onChange={() => setTypeAsList(!typeAsList)} />
      {showHelper && (
        <pre className='browser-helptext'>
          <b>{props.value}</b>
        </pre>
      )}
    </>
  );
};
