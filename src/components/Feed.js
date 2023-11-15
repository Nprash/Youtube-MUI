import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from "@mui/material"
import Sidebar from './Sidebar';
import Videos from "./Videos"

import {fetchFromAPI} from "../utilis/fetchFromAPI"

const Feed = () => {

  const [selectedCategory, setSelectedcategory] = useState("New");

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  },[selectedCategory])



  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
      
      <Box sx={{height:{sx:"auto", md:"92vh"},borderRight:"1px solid #3d3d3d", px:{sx:0, md:2} }}>
      {/* sending state to the below component */}
      <Sidebar selectedCategory={selectedCategory} setSelectedcategory={setSelectedcategory} />
      <Typography className='copyright' variant='body2' sx={{mt:1.5, color:"#fff"}} >
        copyright 2022 JSM Media
      </Typography>
      
      </Box>

      <Box p={2} sx={{overflowY:"auto", height:"90vh", flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>New
          <span style={{color:"#F31503"}}>videos</span>
        </Typography>
      </Box>

      <Videos videos={[]} />
    </Stack>
  )
}

export default Feed
