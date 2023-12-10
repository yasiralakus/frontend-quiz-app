import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageHTML from './pages/page-html.jsx'
import PageCSS from './pages/page-css.jsx'
import PageJS from './pages/page-js.jsx'
import PageACC from './pages/page-acc.jsx'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },

    {
        path: '/questions-html',
        element: <PageHTML />
    },

    {
        path: '/questions-css',
        element: <PageCSS />
    },

    {
        path: '/questions-js',
        element: <PageJS />
    },

    {
        path: '/questions-accessibility',
        element: <PageACC />
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(

        <RouterProvider router={Router}/>

)
