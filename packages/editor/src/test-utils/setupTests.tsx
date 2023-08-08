// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

global.ResizeObserver = class ResizeObserver {
  [x: string]: any;
  constructor(cb: any) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  unobserve() {}
  disconnect() {}
};

const CodeEditorMock = ({ onChange, ...props }: { id: string; value: string; onChange: (value: string) => void }) => {
  return <input data-testid='code-editor' {...props} onChange={e => onChange(e.target.value)} />;
};

jest.mock('../components/widgets/code-editor', () => ({
  __esModule: true,
  ScriptArea: CodeEditorMock,
  ScriptInput: CodeEditorMock,
  MacroArea: CodeEditorMock,
  MacroInput: CodeEditorMock,
  SingleLineCodeEditor: CodeEditorMock
}));
