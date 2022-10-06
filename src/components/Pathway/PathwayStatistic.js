import React from 'react';

const PathwayStatistics = (props) => {

    return (
        <div>
            {
                Object.entries(props).map(([key, value]) => (
                    <div>
                        {key}
                        <div>{value}</div>
                    </div>
                ))
            }

        </div>        
    )
 };

 export default PathwayStatistics;
 