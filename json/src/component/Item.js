function Item( {info,fun} ){
    
    function itemView(){
        fun(info.id);
    }

    return(
        <>
            <li onClick={itemView}>
                <img src={info.thumb} alt=""/>
                {info.subject}
            </li>
        </>
    );
}
export default Item;