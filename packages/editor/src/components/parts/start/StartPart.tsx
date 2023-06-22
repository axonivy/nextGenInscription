import { useEffect, useState } from 'react';
import { CodeEditor, CollapsiblePart, Fieldset, Input, useFieldset } from '../../../components/widgets';
import { PartProps, usePartDirty, usePartState } from '../../props';
import MappingTree from '../common/mapping-tree/MappingTree';
import { useStartData } from './useStartData';
import { MappingInfo, StartData } from '@axonivy/inscription-protocol';
import { useClient, useEditorContext } from '../../../context';
import ParameterTable from '../common/parameter/ParameterTable';
import { useStartNameSyncher } from './useStartNameSyncher';

type StartPartProps = { hideParamDesc?: boolean; signaturePostfix?: string };

export function useStartPart(props?: StartPartProps): PartProps {
  const { config, defaultConfig, initConfig, resetData } = useStartData();
  const compareData = (data: StartData) => [data.signature, data.input];
  const state = usePartState(compareData(defaultConfig), compareData(config), []);
  const dirty = usePartDirty(compareData(initConfig), compareData(config));
  return {
    name: 'Start',
    state,
    reset: { dirty, action: () => resetData() },
    content: <StartPart {...props} />
  };
}

const StartPart = ({ hideParamDesc, signaturePostfix }: StartPartProps) => {
  const { config, updateSignature, updater } = useStartData();
  const [mappingInfo, setMappingInfo] = useState<MappingInfo>({ variables: [], types: {} });

  const editorContext = useEditorContext();
  const client = useClient();
  useEffect(() => {
    client.outMapping(editorContext.pid).then(mapping => setMappingInfo(mapping));
  }, [client, editorContext.pid]);

  useStartNameSyncher(config, signaturePostfix);

  const signatureFieldset = useFieldset();
  return (
    <>
      <Fieldset label='Signature' {...signatureFieldset.labelProps}>
        <Input value={config.signature} onChange={change => updateSignature(change)} {...signatureFieldset.inputProps} />
      </Fieldset>
      <CollapsiblePart collapsibleLabel='Input parameters'>
        <ParameterTable data={config.input.params} onChange={change => updater('params', change)} hideDesc={hideParamDesc} />
      </CollapsiblePart>
      <MappingTree data={config.input.map} mappingInfo={mappingInfo} onChange={change => updater('map', change)} location='input.code' />
      <Fieldset label='Code'>
        <CodeEditor code={config.input.code} onChange={change => updater('code', change)} location='input.code' />
      </Fieldset>
    </>
  );
};
