import { SelectableValidationRow } from '../../../common';
import { useRestRequestData } from '../../useRestRequestData';
import {
  EditableCell,
  Fieldset,
  ResizableHeader,
  ScriptCell,
  SortableHeader,
  Table,
  TableAddRow,
  TableCell,
  TableHeader
} from '../../../../widgets';
import type { ColumnDef, RowSelectionState, SortingState } from '@tanstack/react-table';
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { IvyIcons } from '@axonivy/ui-icons';
import { useEffect, useMemo, useState } from 'react';
import { IVY_SCRIPT_TYPES } from '@axonivy/inscription-protocol';
import { useRestResourceMeta } from '../../useRestResourceMeta';
import type { RestParam } from './rest-parameter';
import { restParamBuilder, toRestMap, updateRestParams } from './rest-parameter';
import { PathContext } from '../../../../../context';
import { deepEqual } from '../../../../../utils/equals';

const EMPTY_PARAMETER: RestParam = { name: '', expression: '', known: false };

export const RestForm = () => {
  const { config, updateBody } = useRestRequestData();

  const [data, setData] = useState<RestParam[]>([]);
  const restResource = useRestResourceMeta();

  useEffect(() => {
    const restResourceParam = restResource.method?.inBody.type;
    const params = restParamBuilder().openApiParam(restResourceParam).restMap(config.body.form).build();
    setData(params);
  }, [restResource.method?.inBody.type, config.body.form]);

  const onChange = (params: RestParam[]) => updateBody('form', toRestMap(params));

  const columns = useMemo<ColumnDef<RestParam>[]>(
    () => [
      {
        accessorKey: 'name',
        header: header => <SortableHeader header={header} name='Name' seperator={true} />,
        cell: cell => <EditableCell cell={cell} disabled={cell.row.original.known} />
      },
      {
        accessorKey: 'expression',
        header: header => <SortableHeader header={header} name='Expression' />,
        cell: cell => (
          <ScriptCell
            placeholder={cell.row.original.type}
            cell={cell}
            type={cell.row.original.type ?? IVY_SCRIPT_TYPES.OBJECT}
            browsers={['attr', 'func', 'type', 'cms']}
          />
        )
      }
    ],
    []
  );

  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const showAddButton = () => {
    return data.filter(obj => deepEqual(obj, EMPTY_PARAMETER)).length === 0;
  };

  const addRow = () => {
    const newData = [...data];
    newData.push(EMPTY_PARAMETER);
    onChange(newData);
    setRowSelection({ [`${newData.length - 1}`]: true });
  };

  const removeRow = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    if (newData.length === 0) {
      setRowSelection({});
    } else if (index === data.length - 1) {
      setRowSelection({ [`${newData.length - 1}`]: true });
    }
    onChange(newData);
  };

  const table = useReactTable({
    data,
    columns,
    state: { sorting, rowSelection },
    columnResizeMode: 'onChange',
    columnResizeDirection: 'ltr',
    enableRowSelection: true,
    enableMultiRowSelection: false,
    enableSubRowSelection: false,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    meta: {
      updateData: (rowId: string, columnId: string, value: unknown) => {
        const rowIndex = parseInt(rowId);
        onChange(updateRestParams(data, rowIndex, columnId, value as string));
      }
    }
  });

  const showTableActions =
    table.getSelectedRowModel().rows.length > 0 && !table.getRowModel().rowsById[Object.keys(rowSelection)[0]].original.known;

  const tableActions = showTableActions
    ? [
        {
          label: 'Remove row',
          icon: IvyIcons.Trash,
          action: () => removeRow(table.getRowModel().rowsById[Object.keys(rowSelection)[0]].index)
        }
      ]
    : [];

  return (
    <PathContext path='form'>
      <div>
        {showTableActions && <Fieldset label=' ' controls={tableActions} />}
        <Table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <ResizableHeader key={headerGroup.id} headerGroup={headerGroup} setRowSelection={setRowSelection}>
                {headerGroup.headers.map(header => (
                  <TableHeader key={header.id} colSpan={header.colSpan} style={{ width: header.getSize() }}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHeader>
                ))}
              </ResizableHeader>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <SelectableValidationRow row={row} colSpan={2} key={row.id} rowPathSuffix={row.original.name} title={row.original.doc}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id} style={{ width: cell.column.getSize() }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </SelectableValidationRow>
            ))}
          </tbody>
        </Table>
      </div>
      {showAddButton() && <TableAddRow addRow={addRow} />}
    </PathContext>
  );
};
