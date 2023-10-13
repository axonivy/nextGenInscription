import { OutputData } from '@axonivy/inscription-protocol';
import { ScriptArea, useFieldset } from '../../widgets';
import { PathContext, useEditorContext, useMeta, useValidations } from '../../../context';
import { PartProps, usePartDirty, usePartState } from '../../editors';
import { useOutputData } from './useOutputData';
import { MappingPart, PathFieldset } from '../common';
import { BrowserType } from '../../../components/browser';

export function useOutputPart(options?: { hideCode?: boolean; additionalBrowsers?: BrowserType[] }): PartProps {
  const { config, defaultConfig, initConfig, resetOutput } = useOutputData();
  const compareData = (data: OutputData) => [data.output.map, options?.hideCode ? '' : data.output.code];
  const validations = useValidations(options?.hideCode ? ['output', 'map'] : ['output']);
  const state = usePartState(compareData(defaultConfig), compareData(config), validations);
  const dirty = usePartDirty(compareData(initConfig), compareData(config));
  return {
    name: 'Output',
    state,
    reset: { dirty, action: () => resetOutput(!options?.hideCode) },
    content: <OutputPart showCode={!options?.hideCode} additionalBrowsers={options?.additionalBrowsers} />
  };
}

const OutputPart = (props: { showCode?: boolean; additionalBrowsers?: BrowserType[] }) => {
  const { config, update } = useOutputData();

  const { context } = useEditorContext();
  const { data: variableInfo } = useMeta('meta/scripting/out', { context, location: 'output' }, { variables: [], types: {} });

  const browsers: BrowserType[] = ['attr', 'func', 'datatype', ...(props.additionalBrowsers ?? [])];

  const codeFieldset = useFieldset();
  return (
    <PathContext path='output'>
      <MappingPart data={config.output.map} variableInfo={variableInfo} onChange={change => update('map', change)} browsers={browsers} />
      {props.showCode && (
        <PathFieldset label='Code' {...codeFieldset.labelProps} path='code'>
          <ScriptArea
            value={config.output.code}
            onChange={change => update('code', change)}
            browsers={browsers}
            {...codeFieldset.inputProps}
          />
        </PathFieldset>
      )}
    </PathContext>
  );
};
