import React from 'react';
import { Card } from 'semantic-ui-react';
import PathwayStatistics from './PathwayStatistic';

const handleClick = (id) => {
    alert(`Hello, I am happy Id: ${id}`)
}

 export const PathwayCard = ({ id, name, modules, reactions, compounds }) => (
    <Card onClick={() => handleClick(id)}>
        <Card.Content>
            {/*<Card.Header>Metabolic Pathway</Card.Header>*/}
            <Card.Meta textAlign='right'>
            <span><img className="network" src="../neural.png" alt={"neural"} width="32" height="32"/></span>
                <span className='id'>{ `KEGG Id: ${id}` }</span>
            </Card.Meta>
            <Card.Description>
                { `${name.substring(0, 60)}...` }
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <PathwayStatistics {...{
                modules: modules.length, 
                reactions: reactions.length, 
                compounds: compounds.length
                }
            } />
        </Card.Content>
    </Card>
 );

 export default PathwayCard;
 