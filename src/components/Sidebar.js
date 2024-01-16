import { Stack } from "@mui/material";
import { categories } from "../utilis/constants";
import React from "react"

// const selectedCategory = "New";  no need , getting from feed as props to here and defined the state as "New"
const Sidebar = ({selectedCategory, setSelectedCategory}) =>{
    return(
       <Stack direction="row" sx={{overflowY:"auto", height:{sx:"auto", md:"95%"}, flexDirection:{md:"column"}, zIndex:'-10'}}>

        {categories.map((category)=>(
            <button key={category.name} onClick={()=>{setSelectedCategory(category.name)}} className="category-btn" style={{background : category.name=== selectedCategory && "#3d3d3d", color:"white"}}>
                
                <span style={{color: category.name=== selectedCategory? "white" : "red", marginRight:"15px"}} >
                    {category.icon}
                </span>
                <span style={{opacity: category.name === selectedCategory? "1" :"0.8"}}>
                    {category.name}
                </span>
                
            </button>
        ))}
       </Stack>
    )
}

export default Sidebar;