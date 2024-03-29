import React from 'react'
import { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom"
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Videos from './Videos';
import { fetchFromAPI } from '../utilis/fetchFromAPI';


const VideoDetail = () => {

  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null)

  useEffect(()=>{

  fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]))

  fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setVideos(data.items))


  },[id]);
  // console.log(videoDetail)
  // console.log(videos)

  if(!videoDetail?.snippet) return 'Loading...'; 
  const {snippet:{title, channelId, channelTitle}, statistics} = videoDetail;
  // const {viewCount, likeCount} = statistics
  return (
    <Box minHeight="100vh">

      <Stack direction={{xs:'column', md:'row'}}>

        <Box  flex={1} mx='30px' >
          <Box sx={{width:"100%",position:'sticky',  top:"86px", mb:"20px"}}borderTop='1px solid #3d3d3d' borderLeft='1px solid #3d3d3d' borderRight="1px solid #3d3d3d" borderBottom="1px solid #3d3d3d" borderRadius={4} >
            <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`}  className='react-player' controls />
            <Typography color="#fff" varient="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            
            <Stack direction='row' justifyContent='space-between' sx={{color:'#fff' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`} >
                <Typography varient={{sm:'sutitle', md:'h6'}} color='#ffff'>
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px', color:"gray", ml:"5px"}} />
                </Typography>
              </Link>

              <Stack direction='row' gap='20px'  alignItems='center'>
                <Typography varient='body1' sx={{opacity:'0.7'}}>
                {/* {parseInt(viewCount).toLocaleString()} views */}
                </Typography>
                  
                <Typography varient='body1' sx={{opacity:'0.7'}}>
                {/* {parseInt(likeCount).toLocaleString()} likes */}
                </Typography>
              </Stack>

            </Stack>
          </Box>
        </Box>

        <Box  px={2} py={{md:2, xs:5}} mr='20px' justifyContent='center'alignItems="center" borderTop='1px solid #3d3d3d' borderLeft='1px solid #3d3d3d' borderRight="1px solid #3d3d3d" borderBottom="1px solid #3d3d3d" borderRadius={4}>
          <Videos videos={videos} direction='column'/>
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail
