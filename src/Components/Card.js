import React from "react";

const Card=({link,key,setIndex})=>{
    return(
        <div>
            <img src={link} id={key} alt={"img"} className="rounded h-[200px] w-[150px] cursor-pointer flex justify-center" onClick={(e)=>{console.log(e)}}/>
        </div>
    )
}
export default Card;