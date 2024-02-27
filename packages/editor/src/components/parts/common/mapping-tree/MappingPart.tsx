import { memo } from 'react';
import { PathFieldset } from '../path/PathFieldset';
import MappingTree from './MappingTree';
import type { SchemaKeys, VariableInfo } from '@axonivy/inscription-protocol';
import { useTableGlobalFilter, useTableOnlyInscribed } from './useMappingTree';
import type { BrowserType } from '../../../../components/browser';
import { Field } from '@axonivy/ui-components';

export type MappingPartProps = {
  data: Record<string, string>;
  variableInfo: VariableInfo;
  onChange: (change: Record<string, string>) => void;
  path?: SchemaKeys;
  browsers: BrowserType[];
};

const MappingPart = ({ path, ...props }: MappingPartProps) => {
  const globalFilter = useTableGlobalFilter();
  const onlyInscribedFilter = useTableOnlyInscribed();

  return (
    <PathFieldset label='Mapping' controls={[globalFilter.control, onlyInscribedFilter.control]} path={path ?? 'map'}>
      <Field>
        <MappingTree {...props} globalFilter={globalFilter} onlyInscribedFilter={onlyInscribedFilter} />
      </Field>
    </PathFieldset>
  );
};

export default memo(MappingPart);
