import React from 'react';
import {
   Navbar,
   Alignment,
   Button,
   Classes,
   NavbarGroup,
   Icon,
} from '@blueprintjs/core';

export const  Footer = ({alignRight}) => (
  <Navbar  fixedBottom={true} className="footer">
    <NavbarGroup align={Alignment.LEFT}>
      <div className={Classes.TEXT_MUTED}>
        Built with <Icon icon="heart" color="gray" iconSize={Icon.SIZE_LARGE} />
        &nbsp; <small><a href="https://next.org">Next.js</a></small> &nbsp;
      </div>
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
      <Button className={Classes.MINIMAL} icon="envelope"><div className={Classes.TEXT_MUTED}>Contact Us</div></Button>
    </NavbarGroup>
  </Navbar>
)