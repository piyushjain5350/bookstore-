import React from "react";

const Card=({link,key,setVal,indexProp})=>{

    function handlingFn(){
        console.log(indexProp);
        setVal(indexProp);
    }
    return(
        <div>
            <img src={link} key={key} alt={"img"} className="rounded h-[200px] w-[150px] cursor-pointer flex justify-center" onClick={handlingFn}/>
        </div>
    )
}
export default Card;