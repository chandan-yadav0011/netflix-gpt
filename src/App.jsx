import Body from "./components/Body"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"
import Login from "./components/Login"
import Browse from "./components/Browse"

function App() {
  
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },
    {
        path:"browse",
        element: <Browse/>
    },
    
  ])

  return (
    <RouterProvider router = {appRouter}>
        <Header/>
        <Body/>
        <Footer/>
    </RouterProvider>
  )
}

export default App
