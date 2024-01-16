import {useState, useEffect} from 'react';
import {Box,Stack, Typography} from "@mui/material"
import Videos from "./Videos"
import { useParams } from 'react-router-dom';
import {fetchFromAPI} from "../utilis/fetchFromAPI"
import Sidebar from './Sidebar';


const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const [videos, setVideos] = useState(null);
  const {searchTerm} = useParams();
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{setVideos(data.items)})

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setVideos(data.items)})

  },[searchTerm, selectedCategory]);
  // console.log(videos);

  // useEffect(()=>{
  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  //   .then((data)=>{setVideos(data.items)})
  // },[selectedCategory]);
  // console.log(videos);

  return (
    

    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
          
    <Box sx={{height:{sx:"auto", md:"92vh"},borderRight:"1px solid #3d3d3d", px:{sx:0, md:2} }}>
      {/* sending state to the below component */}
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Typography className='copyright' variant='body2' sx={{mt:1.5, color:"#fff"}} >
        copyright 2024 youtube clone
      </Typography>

    </Box>

    <Box p={2} sx={{overflowY:"auto",  height:"90vh", flex:2}} mx='6px' borderLeft='2px solid #3d3d3d' borderRight="2px solid #3d3d3d" borderBottom="2px solid #3d3d3d" borderTop="2px solid #3d3d3d" borderRadius={4}>
      <Typography variant="h5" fontWeight="semibold" mb={2} sx={{color:"white"}}>
        {/* {selectedCategory? (<span style={{color:"#F31503"}}>{selectedCategory}</span>+ "videos") :!selectedCategory && searchTerm ?("Search Results for :"+<span style={{color:"#F31503"}}>{searchTerm}</span>+ "videos"):(null)} */}
        Search Results for :<span style={{color:"#F31503"}}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>

    </Stack>
    

  )
}

export default SearchFeed;



