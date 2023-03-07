import { useState } from "react";
import Home from "./pages/Home"
import About from "./About";

function App() {
  const [changeP, setChangeP]=useState(false);
  

  return (
    <div>
      {
        changeP? <Home/>: <About/>
      }
      <button onClick={()=> setChangeP(!changeP)}>CLICK</button>
      
    
 
    </div>
  );
}

export default App;
