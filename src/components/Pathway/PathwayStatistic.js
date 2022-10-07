import React from 'react';
import { Box, Typography } from '@mui/material';
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CategoryRounded, CircleNotificationsOutlined, PrecisionManufacturingRounded, ScienceRounded } from '@mui/icons-material';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const PathwayStatistics = (data) => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
        {
            Object.entries(data).map(([key, value]) => {
                
                let icon;

                switch(key) {
                    case 'modules':
                        icon = <CategoryRounded />;
                        break;
                    case 'reactions':
                        icon = <PrecisionManufacturingRounded />;
                        break;
                    default:
                        icon = <ScienceRounded />;
                }

                return (
                    <ListItem key={key}>
                        <Chip 
                          icon={icon}
                          label={
                            <Typography color="text.secondary">{key}: {value.length}</Typography>
                            
                          }
                        />
                    </ListItem> 
                )
            })
        }

      </Box>
)

 export default PathwayStatistics;
 