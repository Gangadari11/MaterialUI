import React from "react";
import {
  Box,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  
} from '@mui/material';
import { MoreVert, Favorite, Share  } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Post from "./Post";

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    )
}

export default Feed;