
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Screens/Home'
import Service from './Screens/Service'
import About from './Screens/About'
import Contact from './Screens/Contact'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'service',
                element:<Service/>
            }
        ]
    }
]) 



createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
