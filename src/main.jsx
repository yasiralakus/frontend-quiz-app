import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageHTML from './pages/page-html.jsx'
import ResultsHTML from './results-html.jsx'

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
        path: '/results-html',
        element: <ResultsHTML />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

        <RouterProvider router={Router}/>

        
        

)
