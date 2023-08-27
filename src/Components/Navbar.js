import React ,{useEffect, useContext} from "react";

import logo from '../Assets/logo.svg'
import magnifier from '../Assets/magnifier.svg'
import heart from '../Assets/heart.svg'
import diamond from '../Assets/diamond.svg'
import notification from '../Assets/notification.svg'
import profile from '../Assets/profile.png'

import SearchContext from "../Context/SearchContext";
import axios from "axios";

const Navbar=({setFetchedData ,setMainData})=>{

    const {search , setSearch} = useContext(SearchContext);

    useEffect(()=>{
        fetchedFn('Sherlock+Holmes');
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    function fetchedFn(query){
        axios.get('https://www.googleapis.com/books/v1/volumes',{
            params:{
                q:query,
            }
        })
        .then((res)=>{
            // console.log(query);
            setFetchedData(res.data.items);
            // console.log(res.data.items);
        })
        .catch((err)=>console.log(err));
    }
    
   
    function renderFn(){
        fetchedFn(search);
    }
    
    // console.log(search);
    return(
        <div className="Navbar gap-2 flex align-center justify-between px-2 py-2 bg-black h-full w-full">
            <div className="logo flex items-center gap-2">
                <img src={logo} alt="logo" className="w-10 lg:w-16 sm:w-12"/>
                <span className=" hidden flex items-center text-xl font-bold text-white sm:block ">KeazoN<span className="text-[#515050] text-xs">BOOKS</span></span>
            </div>
            <div className="search w-full flex items-center sm:w-5/12 gap-4  ">
                <div className="search-input flex items-center text-[#515050] bg-[#373737] py-1 px-2 w-full rounded">
                    <img src={magnifier} alt="magnifier" />
                    <input type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." className="border-none outline-none bg-transparent w-full text-white" onChange={(e)=>setSearch(e.target.value)}/>
                    
                </div>
                <button type="submit" className="text-[#515050] px-4 py-1 rounded border" onClick={renderFn}>Search</button>
            </div>
            <div className=" hidden sm:flex profile flex w-1/5 justify-between items-center">
                <img src={heart} alt="heart"  className="w-8 h-8 cursor-pointer"/>
                <img src={notification} alt="notifiaction" className="w-8 h-8 cursor-pointer"/>
                <img src={diamond} alt="diamond" className="w-8 h-8 cursor-pointer"/>
                <img src={profile} alt="profile"  className="w-8 h-8 cursor-pointer"/>
            </div>
        </div>
    )
}

export default Navbar;