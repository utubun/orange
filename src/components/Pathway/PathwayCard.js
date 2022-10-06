import React from 'react';
import PathwayStatistics from './PathwayStatistic';

const handleClick = (id) => {
    alert(`Hello, I am happy Id: ${id}`)
}

 export const PathwayCard = ({ id, name, modules, reactions, compounds }) => (
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

 export default PathwayCard;
 