import React,{useState} from "react";
import SearchContext from "./SearchContext";

const SearchProvider = ({children}) => {

     const [search,setSearch] = useState('');
     
 
    
     return(
        <SearchContext.Provider value={{
            search:search,
            setSearch:setSearch}}>

            {children}

        </SearchContext.Provider>
     )    
}

export default SearchProvider;