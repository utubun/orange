import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PathwayStatistics from './PathwayStatistic';
import { orange } from '@mui/material/colors';
import HubOutlined from '@mui/icons-material/HubOutlined';

const handleClick = (id) => {
    alert(`Hello, I am happy Id: ${id}`)
}

const PreviewPathway = ({ id, name, modules, reactions, compounds }) => (
    <Card>
        <CardHeader
          avatar = {
            <Avatar sx = {{ bgcolor: orange[500] }} aria-label="pathway">
                <HubOutlined />
            </Avatar>
          }
          action = {
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
          }
          title = {
            <Typography sx={{ fontsize: 10 }} color="text.secondary" qutterBottom>

            </Typography>
          }
          subheader = {`${name.substring(0, 50)}... (${id})`} 
        />
        <CardContent>
            <PathwayStatistics 
              modules = { modules } 
              reactions = { reactions } 
              compounds = { compounds } 
          />
        </CardContent>
    </Card>
)

 export default PreviewPathway;
 