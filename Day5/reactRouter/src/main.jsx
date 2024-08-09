import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/NavComponents/Home.jsx'
import About from './components/NavComponents/About.jsx'
import Contact from './components/NavComponents/Contact.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/NavComponents/User.jsx'
import Github from './components/NavComponents/Github.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path: "User/:id",
        element: <User />
      },
      {
        path: "github",
        element: <Github />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
