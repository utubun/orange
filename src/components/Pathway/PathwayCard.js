import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PathwayStatistics from './PathwayStatistic';

const handleClick = (id) => {
    alert(`Hello, I am happy Id: ${id}`)
}

const PreviewPathway = ({ id, name, modules, reactions, compounds }) => (
    <Card sx={{ minWidth: 275}}>
        <CardContent>
            <Typography sx={{ fontsize: 14 }} color="text.secondary" qutterBottom>
                {`KEGG Pathway: ${id}`}
            </Typography>
        </CardContent>
    </Card>
)

 const PathwayCard = ({ id, name, modules, reactions, compounds }) => (
    <div onClick={() => handleClick(id)}>
        <div>
            {/*<Card.Header>Metabolic Pathway</Card.Header>*/}
            <div textAlign='right'>
            <span><img className="network" src="../neural.png" alt={"neural"} width="32" height="32"/></span>
                <span className='id'>{ `KEGG Id: ${id}` }</span>
            </div>
            <div>
                { `${name.substring(0, 60)}...` }
            </div>
        </div>
        <div>
            <PathwayStatistics {...{
                modules: modules.length, 
                reactions: reactions.length, 
                compounds: compounds.length
                }
            } />
        </div>
    </div>
 );

 export default PreviewPathway;
 