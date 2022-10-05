import React from 'react';
import { Message } from 'semantic-ui-react';

const Error = () => (
    <Message negative>
        <Message.Header>Error!</Message.Header>
        <p>Unknown error</p>
    </Message>
);

export default Error;