import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home.jsx";
import Drivers from "./pages/Drivers.jsx"
import RegisterDriver from "./pages/RegisterDriver.jsx"
import Trucks from "./pages/Trucks.jsx"


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/drivers' element={<Drivers />} />
        <Route path='/trucks' element={<Trucks />} />
        <Route path='/registerdriver' element={<RegisterDriver />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App