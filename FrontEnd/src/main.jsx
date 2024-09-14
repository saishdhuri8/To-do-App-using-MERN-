import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Layout1 from './components/Layouts/Layout1.jsx'
import Starting from './components/Layouts/Starting.jsx'

import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout2 from './components/Layouts/Layout2.jsx'

const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout1/> ,

      children:[
        {
          path:"",
          element:<Starting/>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/signup",
          element: <Signup/>
        }
      ]
    },
    {
      path:"/task",
      element:<Layout2/>
    }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
