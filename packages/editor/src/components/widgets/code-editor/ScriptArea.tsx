import './ScriptArea.css';
import type { CodeEditorAreaProps } from './ResizableCodeEditor';
import ResizableCodeEditor from './ResizableCodeEditor';
import { Browser, useBrowser } from '../../../components/browser';
import { useMonacoEditor } from './useCodeEditor';
import { usePath } from '../../../context';

const ScriptArea = (props: CodeEditorAreaProps) => {
  const browser = useBrowser();
  const { setEditor, modifyEditor, getMonacoSelection } = useMonacoEditor({ scriptAreaDatatypeEditor: true });
  const path = usePath();

  return (
    <div className='script-area'>
      <ResizableCodeEditor {...props} location={path} onMountFuncs={[setEditor]} />
      <Browser {...browser} types={props.browsers} accept={modifyEditor} location={path} initSearchFilter={getMonacoSelection} />
    </div>
  );
};

export default ScriptArea;
