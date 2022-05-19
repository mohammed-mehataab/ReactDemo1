import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
//import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import DownloadIcon from '@mui/icons-material/Download';

import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function Posts() {
  
  return (
            <Card 
                sx={{
                    marginTop: 8,
                    marginLeft:60,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: 340
                   }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500],  }} aria-label="recipe">
                    MN
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Mehataab Naazneen"
                subheader="Yummy Dishes!"
            />
            <CardMedia
                component="img"
                height="194"
                //image="https://i.pinimg.com/736x/2c/23/a9/2c23a9a24b7b031f5ad01c900a9993d7.jpg"
                image="https://images.unsplash.com/photo-1652862730779-c4f87896c7a7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=400"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This is an impressive dish one of favourites paneeerr!!!  with butter naan looks yummy lets fill our tummy:)
                </Typography>
            </CardContent>
            <CardActions disableSpacing >
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="comments">
                <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton aria-label="download">
                <DownloadIcon />
                </IconButton>

            </CardActions>

            </Card>
  );
}