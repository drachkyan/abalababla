import React, { useEffect, useRef,lazy } from 'react';
import CodeEditor from "./codeEditor"
const AceEditor = lazy(() => import("./aceEditor"));

const Task = () => {
  const [code, setCode] = React.useState('// Ваш код здесь');
  
  return (
    
    <div>
      <h1>task</h1>
      <AceEditor />
    </div>
  );
};

export default Task;