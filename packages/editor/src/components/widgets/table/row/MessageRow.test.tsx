import { render, screen } from 'test-utils';
import { MessageRowWithTr } from './MessageRow';
import type { Message } from '../../message/Message';
import { describe, test, expect } from 'vitest';

describe('MessageRow', () => {
  function renderTable(message?: Message) {
    render(
      <table>
        <tbody>
          <MessageRowWithTr colSpan={3} message={message}>
            <td>content</td>
          </MessageRowWithTr>
        </tbody>
      </table>
    );
  }

  test('no message', async () => {
    renderTable();
    expect(screen.getByRole('row')).not.toHaveClass('row-error');
  });

  test('message', async () => {
    renderTable({ message: 'hi', severity: 'ERROR' });
    const rows = screen.getAllByRole('row');
    expect(rows[0]).toHaveClass('row-error');
    expect(rows[1]).toHaveClass('row-message');
    expect(rows[1]).toHaveTextContent('hi');
  });
});
