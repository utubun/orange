import React from 'react';
import { Button } from '@blueprintjs/core';

export const myButton = ({text}) => (
  <Button intent='success' text={text} onClick={incrementCounter} />
)

function incrementCounter() {
  return
}