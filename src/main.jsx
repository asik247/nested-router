import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Route/Root.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Profile from './Components/Profile/Profile.jsx'

// Nested router code start here;
const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children:[
      {index:true,Component:About},
      {path:"contact",Component:Contact},
      {path:"profile",Component:Profile},
    ]
  }
])
// Nested router code end here;

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
