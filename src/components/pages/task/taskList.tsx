import React, { useEffect, useState } from 'react';
import "./taskList.less";

export const TaskList = () => {
    interface Task {
        name: string,
        desc: string,
        cat: string
    }

    const [taskList, changeList] = useState<Task[]>([]);

    useEffect(() => {
        fetch('http://45.82.153.53:8000/tasksAPI/all/')
            .then(response => {
                return response.json();
            })
            .then(data => {
                changeList(prev => {
                    return [...prev, ...data]
                });
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []); 

    return (
        <>
            {taskList.map((el: Task, index: number) => {
                return (
                    <div className="task" key={index}>
                        <p>{el.name}</p>
                        <p>{el.desc}</p>
                    </div>
                );
            })}
        </>
    );
}