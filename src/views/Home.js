import React, { useState } from 'react';
import { Container, Segment, Form, Input } from 'semantic-ui-react';



 export default function Home () {

   const [ query, setQuery ] = useState('');

   return (
      <Container>
      <Segment>
         <Form>
            <Form.Field>
               <Input 
                 icon={{ name: 'search', circular: true, link: true }} 
                 placeholder='Pathway name...' 
                 onChange={ event => setQuery(event.target.value) }
               />
            </Form.Field>
         </Form>
      </Segment>
      <pre>{query}</pre>
    </Container>
   )
 };
 