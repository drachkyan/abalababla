import React,{useState, Suspense} from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

const MyEditor = () => {
    const defaultText:string = "#start typing..."
    const [codeText, setText]=useState(defaultText);
    return (
        <Suspense fallback={<div>loading...</div>}>
        <AceEditor
            mode="javascript" // Укажите язык
            theme="github" // Укажите тему
            name="my-editor"
            editorProps={{ $blockScrolling: true }}
            width="50vh"
            height="40vh"
            value={codeText}
            onChange={(newValue) => {
                setText(newValue);
            }}
        />
        <button onClick={()=>{console.log(codeText)}}>send</button>
        </Suspense>
        
    );
};

export default MyEditor;