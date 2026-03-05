import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Route/Root.jsx'
import About from './Components/About/About.jsx'

// Nested router code start here;
const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children:[
      {index:true,Component:About}
    ]
  }
])
// Nested router code end here;

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
