import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export const App = () =>{
    return (
        <div>
            <h1>
            main page
        </h1>

        <Outlet />
        </div>
    )
}