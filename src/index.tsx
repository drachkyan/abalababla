import "./style.less"
import React from 'react';
import {createRoot} from 'react-dom/client'
import {App} from './components/app'

const root:HTMLElement = document.getElementById("root");

let a:number = 5;
console.log(a);

const container = createRoot(root);
container.render(
    <App />
)