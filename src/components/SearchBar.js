import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper, IconButton} from "@mui/material"
import {Search} from "@mui/icons-material"



const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`) // if searchTerm exist then navigate to this url this url defined in SearchFeed component in fetch method
      setSearchTerm('') //to reset after navigating to ascertianed url which is mapped to SearchFeed component
    }
  }

  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{borderRadius:20, border:"1px solid #e3e3e3",  boxShadow:"none", mr:{sm:5}, backgroundColor:'#3d3d3d' }} >
        <input className='search-bar' placeholder='search...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <IconButton type='"submit' sx={{p:"5px",color:"red" }}>
            <Search  />
        </IconButton>
    </Paper>
  )
}

export default SearchBar;
