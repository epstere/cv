import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../components/views/Home'
import Home2 from '../components/views/outlets/Home'
import Education from '../components/views/outlets/Education'
import Professional from '../components/views/outlets/Professional'

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/',
                        element: <Home2 />
                    },
                    {
                        path: '/education',
                        element: <Education />
                    },
                    {
                        path: '/professional',
                        element: <Professional />
                    },
                ]
            },
        ]
    }
])