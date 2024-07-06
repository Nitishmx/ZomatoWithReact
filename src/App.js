import React from 'react'
import AddResto from './Component/AddResto';
import { Route, Routes } from 'react-router-dom';
import AllComponent from './Rout/AllComponent';
function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<AllComponent/>}></Route>
         <Route path='/resto' element={<AddResto/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
