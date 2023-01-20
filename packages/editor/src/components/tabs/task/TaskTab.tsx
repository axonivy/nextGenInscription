import { InscriptionValidation } from '@axonivy/inscription-protocol';
import { useValidation } from '../../../context';
import { TabProps, useTabState } from '../../props';
import TaskPart from './TaskPart';

function useTaskTabValidation(): InscriptionValidation[] {
  const task = useValidation('config/task');
  return [task];
}

export function useTaskTab(options?: { showPersist?: boolean }): TabProps {
  const validation = useTaskTabValidation();
  const tabState = useTabState({}, {}, validation);
  return {
    name: 'Task',
    state: tabState,
    content: <TaskTab showPersist={options?.showPersist} />
  };
}

const TaskTab = (props: { showPersist?: boolean }) => {
  return <TaskPart showPersist={props.showPersist} />;
};
