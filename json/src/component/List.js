import data from "../data/data.json";
import Item from "./Item";
import "../App.css";
import {useRef,useState} from "react";


function List(){
    let lypop = useRef();

    let [thumb,setThumb] = useState(),
        [subject,setSubject] = useState(),
        [summary,setSummary] = useState(),
        [detail,setDetail] = useState();


    function popup(n){

        setThumb(data.work[n].thumb);
        setSubject(data.work[n].subject);
        setSummary(data.work[n].summary);
        setDetail(data.work[n].detail);
        lypop.current.style = "display:flex";
    }
    function close(e){
        if(e.target.className == 'popup'){
            lypop.current.style = "display:none";
        }
    }


    return(
        <>
            <h2>Work</h2>
            <ul className="work">
                {
                    data.work.map(function(v,k){
                        return <Item  info={v} fun={popup} key={k} />;
                    })
                }
            </ul>
            <div className="popup" ref={lypop} onClick={close}>
                <div>
                    <img src={thumb} />
                    <p>{subject}</p>
                    <p>{summary}</p>
                    <p>{detail}</p>
                </div>
            </div>
        </>
    );
}

export default List;