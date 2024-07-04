import type { ComboboxItem } from '../../widgets';
import { Combobox, IvyIcon } from '../../widgets';
import type { IvyIcons } from '@axonivy/ui-icons';
import type { CallableStart } from '@axonivy/inscription-protocol';
import { useMemo } from 'react';

export type CallableStartItem = CallableStart & ComboboxItem;

type CallSelectProps = {
  start: string;
  onChange: (change: string) => void;
  starts: CallableStart[];
  startIcon: IvyIcons;
};

const CallSelect = ({ start, onChange, starts, startIcon }: CallSelectProps) => {
  const items = useMemo<CallableStartItem[]>(
    () =>
      starts.map(start => {
        return {
          ...start,
          value: start.id,
          tooltip: { main: `${start.process} : ${start.startName}`, additional: `${start.project} ${start.packageName}` }
        };
      }),
    [starts]
  );

  const itemFilter = (item: CallableStartItem, input?: string) => {
    if (!input) {
      return true;
    }
    const filter = input.toLowerCase();
    return (
      item.value.toLowerCase().includes(filter) ||
      item.packageName.toLowerCase().includes(filter) ||
      item.project.toLowerCase().includes(filter)
    );
  };

  const comboboxItem = (item: CallableStartItem) => {
    return (
      <>
        <div>
          <IvyIcon icon={startIcon} />
          <span style={item.deprecated ? { textDecoration: 'line-through' } : {}}>{`${item.process} : ${item.startName} `}</span>
        </div>
        <div className='combobox-menu-entry-additional'>{`[${item.project} ${item.packageName}]`}</div>
      </>
    );
  };

  const deprecatedSelection = useMemo(() => starts.find(s => s.id === start)?.deprecated, [start, starts]);

  return (
    <Combobox
      items={items}
      comboboxItem={comboboxItem}
      itemFilter={itemFilter}
      value={start}
      onChange={onChange}
      style={deprecatedSelection ? { textDecoration: 'line-through' } : {}}
    />
  );
};

export default CallSelect;
