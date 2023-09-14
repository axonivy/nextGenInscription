import { DeepPartial, render, renderHook, screen } from 'test-utils';
import { ElementData, InscriptionValidation, ProcessDataData } from '@axonivy/inscription-protocol';
import { PartStateFlag } from '../../editors';
import { useProcessDataPart } from './ProcessDataPart';

const Part = () => {
  const part = useProcessDataPart();
  return <>{part.content}</>;
};

describe('ProcessDataPart', () => {
  function renderPart(data?: ProcessDataData) {
    render(<Part />, {
      wrapperProps: { data: data && { config: data } }
    });
  }

  test('empty data', async () => {
    renderPart();
    expect(screen.getByLabelText('Data Class')).toHaveValue('');
  });

  test('full data', async () => {
    renderPart({
      data: 'screenshot.project.Order'
    });
    expect(screen.getByLabelText('Data Class')).toHaveValue('screenshot.project.Order');
  });

  function assertState(expectedState: PartStateFlag, data?: DeepPartial<ProcessDataData>, validation?: InscriptionValidation) {
    const { result } = renderHook(() => useProcessDataPart(), {
      wrapperProps: { data: data && { config: data }, validations: validation && [validation] }
    });
    expect(result.current.state.state).toEqual(expectedState);
  }

  test('configured', async () => {
    assertState('empty');
    assertState('configured', {
      data: 'screenshot.project.Order'
    });

    assertState('warning', undefined, { path: 'data.error', message: '', severity: 'WARNING' });
  });

  test('reset', () => {
    let data: DeepPartial<ElementData> = {
      config: {
        data: 'screenshot.project.Order'
      }
    };
    const view = renderHook(() => useProcessDataPart(), {
      wrapperProps: { data, setData: newData => (data = newData) }
    });
    expect(view.result.current.reset.dirty).toEqual(true);

    view.result.current.reset.action();
    expect(data.config?.data).toEqual('');
  });
});
