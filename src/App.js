

import Functioncomp from './HandsonOne/Functioncomp';
import Classcomp from './HandsonOne/Classcomp';
import { useState } from 'react';
import './Apply2.css'
function App() {
  const [funState, setFunState]=useState(false);
  const [clasState, setClasState]=useState(false);
  return (

  <>
  <h1 className='first'>Styling using Function and Class Component</h1>
  <button className='button1' onClick={()=> setFunState(!funState)}>To see styling in functional component</button>
 
  <button  className='button2' onClick={()=> setClasState(!clasState)}>To see styling in class component</button>
    {funState ? <Functioncomp/> : " "}
   {clasState ? <Classcomp/> : " "}
    </>
  );
  
  
}

export default App;
