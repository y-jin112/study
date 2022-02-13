//component > Tab.js

import '../App.css';
import {useRef,useEffect} from "react";

function Tab() {
  let elUl = useRef();
  let elLi = useRef([]);
  let elCon= useRef();
  let data = [
    {title:'useState'},
    {title:'useEffect'},
    {title:'useRef'},
  ];

  let [num,setNum] = useState(0);
  let [active,setActive] = useState(['active','','']);

  function selecter(e){
    let n = e.target.dataset.num;
    let changeActive = ['','',''];
    changeActive[n] = 'active';

    setActive( changeActive );
  }

  return (
    <div>
      <ul className="tab" ref={elUl} onClick={selecter}>
        {
          data.map((v,k)=>(
            <li 
                data-num={k}
                key={k}
                className={active[k]}
                // ref={(el)=>(elLi.current[k]=el)}
            > 
                {v.title} 
            </li>
          ))
        }
      </ul>
      
      <div className="tabContents" ref={elCon}>
        <div className={active[0]}> 01 </div>
        <div className={active[1]}> 02 </div>
        <div className={active[2]}> 03 </div>
      </div>
    </div>
  );
}

export default Tab;