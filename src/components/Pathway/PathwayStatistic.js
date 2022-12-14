import React from 'react';
import { Statistic, Label } from 'semantic-ui-react';

const PathwayStatistics = (props) => {

    return (
        <Label.Group size='tiny'>
            {
                Object.entries(props).map(([key, value]) => (
                    <Label>
                        {key}
                        <Label.Detail>{value}</Label.Detail>
                    </Label>
                ))
            }

        </Label.Group>        
    )
 };

 export default PathwayStatistics;
 