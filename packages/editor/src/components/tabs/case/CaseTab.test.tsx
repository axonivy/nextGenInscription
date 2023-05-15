import { render, screen, TableUtil, renderHook, CollapsableUtil } from 'test-utils';
import { WfCase, CaseData } from '@axonivy/inscription-protocol';
import { useCaseTab } from './CaseTab';
import { TabState } from '../../../components/props';

const Tab = () => {
  const tab = useCaseTab();
  return <>{tab.content}</>;
};

describe('CaseTab', () => {
  function renderTab(data?: CaseData) {
    render(<Tab />, { wrapperProps: { data: data && { config: data } } });
  }

  async function assertMainPart(name: string, description: string, category: string) {
    expect(await screen.findByLabelText('Name')).toHaveValue(name);
    expect(await screen.findByLabelText('Description')).toHaveValue(description);
    expect(await screen.findByLabelText('Category')).toHaveValue(category);
  }

  test('empty data', async () => {
    renderTab();
    await assertMainPart('', '', '');
    await CollapsableUtil.assertClosed('Custom Fields');
  });

  test('full data', async () => {
    const caseData: CaseData = {
      case: {
        name: 'name',
        description: 'description',
        category: 'category',
        customFields: [{ name: 'field', type: 'STRING', value: '123' }],
        attachToBusinessCase: true
      }
    };
    renderTab(caseData);
    await assertMainPart('name', 'description', 'category');
    await CollapsableUtil.assertOpen('Custom Fields');
    TableUtil.assertRows(['field 123']);
  });

  function assertState(expectedState: TabState, data?: Partial<WfCase>) {
    const { result } = renderHook(() => useCaseTab(), { wrapperProps: { data: data && { config: { case: data } } } });
    expect(result.current.state).toEqual(expectedState);
  }

  test('configured', async () => {
    assertState('empty');
    assertState('configured', { name: 'name' });
    assertState('configured', { description: 'des' });
    assertState('configured', { category: 'category' });
    assertState('configured', { customFields: [{ name: 'asfd', type: 'NUMBER', value: '123' }] });
  });
});
