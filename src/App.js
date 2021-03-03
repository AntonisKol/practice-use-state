import './App.css';
import { useState } from "react";

function App() {

     const [getValue, setValue] = useState('');
     let status ="Text is too short";

     if (getValue.length >= 5 ) {
     status = "Text is ok"
 }
      let letters = getValue.split('')
      let boxes = letters.map(letter =><h3 className="card">{letter}</h3>);

      return (
      <div className="App">
      <input 
      onChange={e => setValue(e.target.value)} value= {getValue}
      />
       
      <h3>{status}</h3>
      <p> You have typed <span>{getValue.length}</span> characters </p>
      <div>{boxes}</div>
      </div> 

    );
  }
  export default App;
