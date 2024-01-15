import React from 'react'
import {Stack, Box} from "@mui/material"
import Videocard from './Videocard'
import Channelcard from './Channelcard'

 
const Videos = ({videos, direction}) => {
  // console.log(videos)
  if(!videos) return null;
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {
        videos.map((item, idx)=>(
 
           <Box key={idx}>
            {item.id.channelId && <Channelcard channelDetail={item}/>}
            {item.id.videoId && <Videocard video={item}/>}

          </Box>
   

        ))
      }
    </Stack>
  )
}

export default Videos
