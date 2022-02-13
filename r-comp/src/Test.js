//Test.js

import { useState } from "react";


function Test(){
    let [count,setCount] = useState(0);
      //[변수명, 변수를 수정할 함수]
    
    
    function countFun(){
        setCount(++count);
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={countFun}>증가</button>
      </div>
    );
}


export default Test;