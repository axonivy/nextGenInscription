import { IvyIcons } from '@axonivy/editor-icons';
import { ElementType } from '@axonivy/inscription-protocol';
import { memo, ReactNode } from 'react';
import InscriptionEditor from '../InscriptionEditor';
import NameEditor from '../NameEditor';
import {
  useCasePart,
  useSignalCatchPart,
  useNamePart,
  useOutputPart,
  useTaskPart,
  useStartPart,
  useErrorCatchPart,
  useTriggerPart,
  useRequestPart
} from '../../../components/parts';

const RequestStartEditor = memo(() => {
  const name = useNamePart();
  const start = useStartPart();
  const request = useRequestPart();
  const trigger = useTriggerPart();
  const task = useTaskPart({ type: 'request' });
  const casePart = useCasePart();
  return <InscriptionEditor icon={IvyIcons.Start} parts={[name, start, request, trigger, task, casePart]} />;
});

const SignalStartEventEditor = memo(() => {
  const name = useNamePart();
  const signal = useSignalCatchPart();
  const output = useOutputPart();
  return <InscriptionEditor icon={IvyIcons.Signal} parts={[name, signal, output]} />;
});

const ErrorStartEventEditor = memo(() => {
  const name = useNamePart();
  const error = useErrorCatchPart();
  const output = useOutputPart();
  return <InscriptionEditor icon={IvyIcons.ErrorEvent} parts={[name, error, output]} />;
});

export const startEventEditors = new Map<ElementType, ReactNode>([
  ['RequestStart', <RequestStartEditor />],
  ['SignalStartEvent', <SignalStartEventEditor />],
  ['ProgramStart', <NameEditor icon={IvyIcons.StartProgram} />],
  ['ErrorStartEvent', <ErrorStartEventEditor />]
]);
