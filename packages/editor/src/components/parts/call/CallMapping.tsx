import type { InscriptionValidation, VariableInfo } from '@axonivy/inscription-protocol';
import { memo } from 'react';
import { ScriptArea } from '../../widgets';
import { useCallData } from './useCallData';
import { PathContext, useValidations } from '../../../context';
import { MappingPart, PathFieldset } from '../common';
import useMaximizedCodeEditor from '../../browser/useMaximizedCodeEditor';

export function useCallPartValidation(): InscriptionValidation[] {
  return useValidations(['call']);
}

const CallMapping = ({ variableInfo }: { variableInfo: VariableInfo }) => {
  const { config, update } = useCallData();
  const { maximizeState, maximizeCode } = useMaximizedCodeEditor();

  return (
    <PathContext path='call'>
      <MappingPart
        data={config.call.map}
        variableInfo={variableInfo}
        onChange={change => update('map', change)}
        browsers={['attr', 'func', 'type']}
      />
      <PathFieldset label='Code' path='code' controls={[maximizeCode]}>
        <ScriptArea
          maximizeState={maximizeState}
          value={config.call.code}
          onChange={change => update('code', change)}
          browsers={['attr', 'func', 'type']}
        />
      </PathFieldset>
    </PathContext>
  );
};

export default memo(CallMapping);
