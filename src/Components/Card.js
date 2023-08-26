import React from "react";

const Card=({link,key,setVal})=>{

    function handlingFn(e){
        console.log(e.target.value);
    }
    return(
        <div>
            <img src={link} key={key} alt={"img"} className="rounded h-[200px] w-[150px] cursor-pointer flex justify-center" />
        </div>
    )
}
export default Card;