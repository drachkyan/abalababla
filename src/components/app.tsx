import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import "./mainstyle.less"

export const App = () =>{
    return (
        <div className="main">
        <div className="header"></div>
        <div className='content'>
            <Outlet />
        </div>
        </div>
    )
}