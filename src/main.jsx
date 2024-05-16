import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import HtmlQuestions from './pages/HtmlQuestions.jsx'
import CssQuestions from './pages/CssQuestions.jsx'
import Results from './pages/Results.jsx'
import JsQuestions from './pages/JsQuestions.jsx'
import ReactQuestions from './pages/ReactQuestions.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/html-questions',
                element: <HtmlQuestions />
            },
            {
                path: '/results',
                element: <Results />
            },
            {
                path: '/css-questions',
                element: <CssQuestions />
            },
            {
                path: '/javascript-questions',
                element: <JsQuestions />
            },
            {
                path: '/react-questions',
                element: <ReactQuestions />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
