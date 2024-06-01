import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbarr";
import AllRoutes from './components/AllRoutes';

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App
