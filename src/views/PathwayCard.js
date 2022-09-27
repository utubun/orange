import React from 'react';
import { Card } from 'semantic-ui-react';
import PathwayStatistics from './PathwayStatistic';

 export const PathwayCard = ({ id, name, modules, reactions, compounds }) => (
    <Card>
        <Card.Content>
            {/*<Card.Header>Metabolic Pathway</Card.Header>*/}
            <Card.Meta textAlign='right'>
                <span className='id'>{ `KEGG Id: ${id}` }</span>
            </Card.Meta>
            <Card.Description>
                { `${name.substring(0, 60)}...` }
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <PathwayStatistics {...{modules: modules, reactions: reactions, compounds: compounds}} />
        </Card.Content>
    </Card>
 );

 export default PathwayCard;
 