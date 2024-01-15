import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from "./Videos"
import Channelcard from "./Channelcard"
import { fetchFromAPI } from '../utilis/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const {id} = useParams()
  const [videos, setVideos] =useState([])
  // console.log(id)

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`) // fetching channel id/name
    .then((data)=>{if(!data) return null; return setChannelDetail(data?.items)})
    console.log(channelDetail)
    //to fetch videos pertaining to the above channel

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{if(!data) return null; return setVideos(data?.items)})
    console.log(videos)

  },[id])

  if(!channelDetail) return null;
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: 'linear-gradient(90deg, rgba(199,170,218,1) 0%, rgba(214,101,101,1) 50%, rgba(192,243,247,1) 100%)', zIndex:10, height:'300px'}}>
        </div>
        <Channelcard channelDetail={channelDetail} marginTop={'-110px'}/>
      </Box>

      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}} />
          <Videos videos={videos}/>
        

      </Box>
    </Box>
  )
}

export default ChannelDetail
