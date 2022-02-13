
function Item( {data} ){
    // { title : '공지사항' }
    function deleteItem(e){
       e.target.parentElement.remove();
    }

    return(
        <>
            <li>
                {data.title} ({data.date})
                <button onClick={deleteItem}>삭제</button>
            </li>
        </>
    );
}
export default Item;