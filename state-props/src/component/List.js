import Item from "./Item";
import {useRef, useState, useEffect} from "react";

function List(){
    let addInput = useRef();
    let notice = [];
    let [list,setList] = useState(notice);
    let count = 0;


    useEffect(function(){
        notice = [
            {id:0, title:'러, 올림픽 기간중 내일이라도 우크라 침공 가능성', date:'2022-02-08'},
            {id:1, title:'안현수, 쇼트트랙 편파 판정 논란에 “나 또한 안타까운 마음”', date:'2022-02-08'},
            {id:2, title:'공지사항', date:'2022-02-08'}
        ];
        setList(notice);
        //이 값을 안넣어주면 처음 화면에선 아무것도 출력되지 않음(리스트가 없음)
    },[]);

        // let [list,setList] = useState(notice);
       //[list,setList] = [notice,notice값을 수정하는 함수]



    function noticeAdd(){
        if(addInput.current.value == '') { alert('내용을 입력하세요!'); return;}

        count = list.length;

        setList(function(list){
            return [...list,{id:count++, title:addInput.current.value, date:'2022-02-08'}];
        });
    }
    useEffect(function(){
        addInput.current.value = '';
    },[list]);


    return(
        <>
            <article>
                <h2>공지추가</h2>
                <div>
                    <input type="text" ref={addInput}/>
                    <button onClick={noticeAdd}>추가</button>
                </div>
            </article>
            <ul>
                {
                    list.map(function(v){
                        return <Item data={v} key={v.id} />
                    })
                }
            </ul>
        </>
    );
}
export default List;



// data.map((v,k) => (
//     <Item title={v} key={k}/>
// ));


//map -> foreach 문이랑같음
//title -> 속성 (props) data -> 값


//useRef - 특정타겟을 지정하는 것
// notice.push(addInput.current.value);   ===>  notice.push({addInput.current.value}); {} 로 객체 추가
