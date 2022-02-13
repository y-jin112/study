import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
// useSelector = state의 값을 가져올때
// useDispatch = state의 값을 변경할때 씀

function App() {
  const {n} = useSelector((state)=>state);
  const dispatch = useDispatch();
  
  function btnEvent(e){
    if(e.target.dataset.name == 'add'){
      dispatch({type:'add'});
    }else{
      dispatch({type:'del'});
    }
  }

  return (
    <div>
      <p> {n} </p>
      <button data-name="add" onClick={btnEvent}>증가</button>
      <button data-name="del" onClick={btnEvent}>감소</button>

      <button data-name="add" onClick={btnEvent}>증가</button>
      <button data-name="del" onClick={btnEvent}>감소</button>
    </div>
  );
}

export default App;