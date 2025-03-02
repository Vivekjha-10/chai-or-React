import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About'
import Contact from './components/contactUs/contactUs'
import User from './components/User/User'
import Github, { githubInfoLoder } from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path:'/', 
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contactus",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contactus' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User />}></Route>
      <Route loader={githubInfoLoder} path='github' element={<Github />}></Route>
    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
