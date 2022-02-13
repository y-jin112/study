
import './App.css';
import { useRef } from 'react';
import {HashRouter,Route,Routes,Link} from "react-router-dom";
import A from "./component/A";
import B from "./component/B";
import C from "./component/C";
import {useState} from "react";

function App() {
  let wrap= useRef();
  let [color,setColor] = useState();

  function thema(str){
    setColor(str);
  }
  function themaChange(){
    wrap.current.className = color;
  }

  

  return (
    <>
      <HashRouter>
        <div className="container" ref={wrap}>
          <header>
            <Link to="/">A</Link>
            <Link to="/B">B</Link>
            <Link to="/C">C</Link>
          </header>
        <button onClick={themaChange}>테마 변경</button>

        <Routes>
          <Route path="/" element={<A bg={thema}/>}/>
          <Route path="/B" element={<B bg={thema}/>}/>
          <Route path="/C" element={<C bg={thema}/>}/>
        </Routes>
        </div>
      </HashRouter>
    </>
    
  );
}

export default App;