
import './App.css'
import React from 'react';
// import BarChart from './Components/BarChart';
// import Dashboard from './Components/Dashboard';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';


// Register the components with ChartJS
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


function App() {

  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  )
}

export default App
