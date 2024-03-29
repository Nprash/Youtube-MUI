import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {demoThumbnailUrl,demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle  } from "../utilis/constants"

const Videocard = ({video}) => {
    const {id, snippet} = video;
    const {videoId, channelId} = id;
    // console.log( snippet,videoId)
  return (
    <Card sx={{width:{xs:'100%',sm:'358px', md:"320px" }, boxShadow:"none", borderRadius:'4px', backgroundColor:'#333'}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:{xs:'100%', sm:'358px', md:"320px",borderRadius:'8px' }, height:180}}/>
        </Link>


        <CardContent sx={{backgroundColor:"#333", height:'106px', borderBottomLeftRadius: '4px'}}>
            <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
                <Typography variant='subtitle'   fontWeight="semibold" fontFamily="Monospace" color="#fff">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>

             <Link to={channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight="bold" color="gray">
                    {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                    <CheckCircle sx={{fontSize:12, color:"gray", ml:"5px"}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default Videocard
