import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import OperatorLogin from './Components/OperatorLogin.jsx'
import AdminLogin from './Components/AdminLogin.jsx'
import DataBaseInformation from './Components/DataBaseInformation.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(   
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='opertorLogin' element={<OperatorLogin/>}></Route>
      <Route path='Adminlogin' element={<AdminLogin/>}></Route>
      <Route path='Adminlogin/databaseinfo' element={<DataBaseInformation/>}></Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
