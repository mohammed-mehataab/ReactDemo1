
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';



import Button from '@mui/material/Button';
import { Hidden } from '@mui/material';


export default function Profile() {
  
  return (
            <Card 
                sx={{
                    marginTop: 8,
                    marginLeft:60,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: 340,
                    height:500
                   }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500],  }} aria-label="recipe">
                    MN
                </Avatar>
                }
               
                
                title="Naazneen"
            />
            <CardContent>

             <Typography gutterBottom variant="h4" color="text.primary">
                 View Profile
                </Typography>
            <CardMedia
                component="img"
                height="200"
                image="https://images.statusfacebook.com/profile_pictures/Beautiful/Beautiful_Profile_Picture130.jpg"
                />

                <Typography variant="body5" color="text.primary">
                Mohammed Mehataab Naazneen 
                </Typography>
                <Typography  color="text.secondary">
                password:-<Hidden>1234</Hidden>
                </Typography>
            </CardContent>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>

            </Card>
  );
}