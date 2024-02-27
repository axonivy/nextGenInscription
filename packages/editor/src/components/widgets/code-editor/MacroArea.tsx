import './ScriptArea.css';
import { Browser, useBrowser } from '../../../components/browser';
import type { CodeEditorAreaProps } from './ResizableCodeEditor';
import ResizableCodeEditor from './ResizableCodeEditor';
import { monacoAutoFocus, useMonacoEditor } from './useCodeEditor';
import { usePath } from '../../../context';
import { CardArea } from '../output/CardText';
import type { ElementRef } from 'react';
import { useRef } from 'react';
import { useOnFocus } from '../../../components/browser/useOnFocus';
import { useField } from '@axonivy/ui-components';

const MacroArea = ({ value, onChange, browsers, ...props }: CodeEditorAreaProps) => {
  const { isFocusWithin, focusWithinProps, focusValue } = useOnFocus(value, onChange);
  const browser = useBrowser();
  const { setEditor, modifyEditor } = useMonacoEditor({ modifyAction: value => `<%=${value}%>` });
  const path = usePath();
  const areaRef = useRef<ElementRef<'output'>>(null);
  const { inputProps } = useField();

  return (
    // tabIndex is needed for safari to catch the focus when click on browser button
    <div className='script-area' {...focusWithinProps} tabIndex={1}>
      {isFocusWithin || browser.open ? (
        <>
          <ResizableCodeEditor
            {...focusValue}
            {...inputProps}
            {...props}
            location={path}
            onMountFuncs={[setEditor, monacoAutoFocus]}
            macro={true}
            initHeight={areaRef.current?.offsetHeight}
          />
          <Browser {...browser} types={browsers} accept={modifyEditor} location={path} />
        </>
      ) : (
        <CardArea value={value} {...inputProps} {...props} ref={areaRef} />
      )}
    </div>
  );
};

export default MacroArea;
