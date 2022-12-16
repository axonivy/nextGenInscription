import { CallData } from '@axonivy/inscription-core';
import { ComboboxItem, DialogStartItem } from '../props/combobox';
import { Message, MessageUtil } from '../props/message';
import CollapsiblePart from './collapsible/CollapsiblePart';
import Combobox from './combobox/Combobox';

const SelectDialog = (props: {
  data: CallData;
  onChange: (change: CallData) => void;
  dialogStarts: DialogStartItem[];
  messages: Message[];
}) => {
  const handleDialogChange = (change: string) => props.onChange({ ...props.data, dialogStart: change });

  const comboboxItem = (item: ComboboxItem) => {
    if (!DialogStartItem.is(item)) {
      return <></>;
    }
    return (
      <>
        <div>
          <span>➡️ {item.startName}</span>
        </div>
        <div>
          <span>🖥️ {item.dialogName} </span>
          <span className='comboboy-menu-entry-additional'>
            {item.package} - [{item.project}]
          </span>
        </div>
      </>
    );
  };

  const itemFilter = (item: ComboboxItem, input?: string) => {
    if (!input) {
      return true;
    }
    if (!DialogStartItem.is(item)) {
      return false;
    }
    var filter = input.toLowerCase();
    return (
      item.value.toLowerCase().includes(filter) ||
      item.package.toLowerCase().includes(filter) ||
      item.project.toLowerCase().includes(filter)
    );
  };

  return (
    <CollapsiblePart collapsibleLabel='User Dialog Start' defaultOpen={true}>
      <Combobox
        label='Dialog'
        items={props.dialogStarts}
        comboboxItem={comboboxItem}
        itemFilter={itemFilter}
        value={props.data.dialogStart}
        onChange={handleDialogChange}
        message={MessageUtil.findMessage(props.messages, 'dialog')}
      />
    </CollapsiblePart>
  );
};

export default SelectDialog;
