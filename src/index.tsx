import "./style.less"
import React from 'react';
import {createRoot} from 'react-dom/client'
import {App} from './components/app'
import {Task} from './components/pages/task/task'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Profile } from "./components/pages/profile/profile";
import { TaskList } from "./components/pages/task/taskList";

const root:HTMLElement = document.getElementById("root");

let a:number = 5;
console.log(a);

const container = createRoot(root);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/task",
            element: <Task />,
        },
        {
            path: "/",
            element: <TaskList />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
      ]
    },
  ]);

container.render(<RouterProvider router={router} />)
