import { memo } from 'react';
import { useData } from '../../useData';
import { CallTabProps } from '../props/call-tab';
import CollapsiblePart from '../widgets/collapsible/CollapsiblePart';
import MappingTreeWithCode from '../widgets/MappingTreeWithCode';
import SelectDialog from '../widgets/SelectDialog';
import './CallTab.css';

const CallTab = (props: CallTabProps) => {
  const [, mappingData, setMappingData] = useData('callData/mappingData');

  return (
    <div className='call-tab'>
      <SelectDialog data={props.data} onChange={props.onChange} messages={props.messages} />
      <CollapsiblePart collapsibleLabel='Mapping of process to dialog data' defaultOpen={true}>
        <MappingTreeWithCode data={mappingData} onChange={setMappingData} messages={props.messages} />
      </CollapsiblePart>
    </div>
  );
};

export default memo(CallTab);
