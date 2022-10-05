import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const Loading = () => (
    <Segment>
        <Dimmer active>
            <Loader>Lodading results...</Loader>
        </Dimmer>
        <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
);

export default Loading;