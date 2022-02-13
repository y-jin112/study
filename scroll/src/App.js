import './App.css';
import {useEffect,useRef} from "react";

function App() {
  let style ={
    fontSize:'5rem',
    height:'500px',
    margin:'50px',
    backgroundColor:'#eee'
  }
  const container = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',scrollFun);
    return ()=>{
      window.removeEventListener('scroll',scrollFun);
    };
  });

  function scrollFun(){
    
    let elm = container.current.children;
    /*
      for(let i=0; i<elm.length; i++){
       console.log( elm[i] )
     }
    */
    /*
    for(let i in elm){
      console.log( elm[i] )
    }
    */
    for(let el of elm){
      if(el.offsetTop < window.scrollY ){

        let strStyle = el.getAttribute('style');
  
        el.style = `${strStyle} border:5px solid #f00`;

      }
    }



    console.log(window.scrollY);
  }


  return (
    <>
      <div ref={container}>
        <div style={style}>01</div>
        <div style={style}>02</div>
        <div style={style}>03</div>
        <div style={style}>04</div>
        <div style={style}>05</div>
      </div>
    </>
  );
}

export default App;