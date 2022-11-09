import React from 'react';
import './collapsable.css';

export const CollapsablePanel = ({ width, marginLeft, hidden, ...props }) => {

  const [mini, setMini] = React.useState();

  const toggleSidebar = () => {
    hidden 
      ? () => { [ width, marginLeft ] = ['250px', '250px' ]; setHidden(false)}
      : () => { [ width, marginLeft ] = ['100px', '100px']; setHidden(true)}
  }

  return (
    <>
    <div id="mySidebar" class="sidebar">
      <a href="#">Home</a>
      <br/>
      <a href="#">Tools</a>
      <br/>
      <a href="#">About</a>
      <br/>
      <a href="#">Contact</a>
    </div>
    <div id="mainWindow" class="container" />
    </>
  );
};
