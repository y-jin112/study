
import './App.css';
import {useRef,useEffect} from "react";
import Tab from './component/Tab';

function App() {
  let elUl = useRef();
  let elLi = useRef([]);
  // 선택자 하나만 걸땐 ()만 넣고 안에 아무 값도 안넣어도됨
  // 선택자가 여러개일땐 ()안에 []배열을 넣어야함
  let elCon= useRef();
  let data = [
    {title:'useState'},
    {title:'useEffect'},
    {title:'useRef'},
  ];
  useEffect(()=>{
    elLi.current[0].classList.add('active');
  },[])

  let lastNum = 0;
  function selecter(e){
    let num=e.target.dataset.num;

    elLi.current[lastNum].classList.remove('active'); 
    elLi.current[num].classList.add('active'); 

    elCon.current.children[lastNum].classList.remove('active'); 
    elCon.current.children[num].classList.add('active'); 

    lastNum = num;
      
    // let left = e.target.getBoundingClientRect().left;//'200px' ;
    // e.target.style = `transform:translateX(${left + + 300}px)`;
  }

  return (
    <div>
      <Tab/>
      
          <ul className="tab" ref={elUl} onClick={selecter}>
            {
              data.map((v,k)=>(
                <li data-num={k} key={k} ref={(el)=>(elLi.current[k]=el)}
                // onClick={(e)=>{ selecter(k,e) } }
                > 
                {v.title} </li>
                // <li key={} ></li> : map 작성시 기본양식
              ))
            }

            {/* <li ref={(el)=>(elLi.current[0]=el)>asdfs</li>
            <li ref={(el)=>(elLi.current[0]=el)>asdfs</li>,
            <li ref={(el)=>(elLi.current[0]=el)>asdfs</li>,
            <li ref={(el)=>(elLi.current[0]=el)>asdfs</li> */}
          </ul>
          <div className="tabContents" ref={elCon}>
            <div className="active"> 01 </div>
            <div> 02 </div>
            <div> 03 </div>
          </div>
    </div>
  );
}

export default App;