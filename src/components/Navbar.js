import React from 'react'
import { Stack, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
// import {logo} from "../utilis/constants"
import SearchBar from './SearchBar'
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} mb={2} zIndex={20} sx={{position:"sticky", background:"#3d3d3d", top:0, justifyContent:"space-between"}}>
    <Link to="/" style={{display:'flex', alignItems:"center"}}>
      {/* <img src={YouTubeIcon} alt="logo" height={45} /> */}
      <IconButton color="inherit" sx={{ color: 'red', width:'65px' }}>
        <YouTubeIcon fontSize="large"  />
      </IconButton>
    </Link>
    <SearchBar />
  </Stack>
);
export default Navbar
