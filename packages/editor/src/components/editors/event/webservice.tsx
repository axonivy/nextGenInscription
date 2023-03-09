import { IvyIcons } from '@axonivy/editor-icons';
import { EventEditorType } from '@axonivy/inscription-protocol';
import { memo, ReactNode } from 'react';
import { useCaseTab, useNameTab } from '../../../components/tabs';
import InscriptionEditor from '../InscriptionEditor';
import NameEditor from '../NameEditor';

const WebserviceStartEditor = memo(() => {
  const nameTab = useNameTab();
  const caseTab = useCaseTab();
  return <InscriptionEditor icon={IvyIcons.WebService} tabs={[nameTab, caseTab]} />;
});

export const webServiceEventEditors = new Map<EventEditorType.Webservice, ReactNode>([
  ['WebserviceStart', <WebserviceStartEditor />],
  ['WebserviceEnd', <NameEditor icon={IvyIcons.WebService} />]
]);
