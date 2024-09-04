import {RouterProvider,createBrowserRouter} from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Link from "./pages/link";
import Auth from "./pages/auth";
import RedirectLink from "./pages/redirect-link";
import Dashboard from "./pages/dashboard";
import UrlProvider from "./context";
import RequireAuth from "./components/require-auth";
//import { RouterProvider } from "react-router";



const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path:"/dashboard",
        element:(
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        )
      },
      {
        path:"/auth",
        element:<Auth/>
      },
      {
        path:"/link/:id",//here we have all of the stats clicks happened for particular link
        element: <RequireAuth><Link/></RequireAuth>
      },
      {
        path:"/:id",
        element:<RedirectLink/>
      }
    ]
  }
])
function App() {
  return <UrlProvider>
      <RouterProvider router={router}/>
  </UrlProvider>
   
}

export default App
