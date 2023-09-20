import { RestResponseData } from '@axonivy/inscription-protocol';
import { PathContext, useEditorContext, useMeta, useValidations } from '../../../context';
import { PartProps, usePartDirty, usePartState } from '../../editors';
import { useRestResponseData } from './useRestRequestData';
import { MappingPart, PathFieldset } from '../common';
import { Collapsible, Input, ScriptArea, useFieldset } from '../../widgets';
import { RestError } from './RestError';

export function useRestResponsePart(): PartProps {
  const { config, defaultConfig, initConfig, resetData } = useRestResponseData();
  const validations = useValidations(['response']);
  const compareData = (data: RestResponseData) => [data.response];
  const state = usePartState(compareData(defaultConfig), compareData(config), validations);
  const dirty = usePartDirty(compareData(initConfig), compareData(config));
  return { name: 'Response', state: state, reset: { dirty, action: () => resetData() }, content: <RestResponsePart /> };
}

const RestResponsePart = () => {
  const { config, defaultConfig, update, updateEntity } = useRestResponseData();
  const { context } = useEditorContext();
  const { data: variableInfo } = useMeta('meta/scripting/out', { context, location: 'response' }, { variables: [], types: {} });

  const typeFieldset = useFieldset();
  const codeFieldset = useFieldset();
  return (
    <PathContext path='response'>
      <PathContext path='entity'>
        <PathFieldset label='Read body as type (result variable)' {...typeFieldset.labelProps} path='type'>
          <Input value={config.response.entity.type} onChange={change => updateEntity('type', change)} {...typeFieldset.inputProps} />
        </PathFieldset>
        <MappingPart data={config.response.entity.map} variableInfo={variableInfo} onChange={change => updateEntity('map', change)} />
        <PathFieldset label='Code' {...codeFieldset.labelProps} path='code'>
          <ScriptArea value={config.response.entity.code} onChange={change => updateEntity('code', change)} {...codeFieldset.inputProps} />
        </PathFieldset>
      </PathContext>

      <Collapsible
        label='Error'
        defaultOpen={
          config.response.clientError !== defaultConfig.response.clientError ||
          config.response.statusError !== defaultConfig.response.statusError
        }
      >
        <RestError
          label='On Error (Connection, Timeout, etc.)'
          value={config.response.clientError}
          onChange={change => update('clientError', change)}
          path='clientError'
        />
        <RestError
          label='On Status Code not successful (2xx)'
          value={config.response.statusError}
          onChange={change => update('statusError', change)}
          path='statusError'
        />
      </Collapsible>
    </PathContext>
  );
};
