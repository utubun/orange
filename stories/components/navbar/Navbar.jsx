import React from 'react';
import { SwitchThemeButton } from '../button/toggleTheme/SwitchThemeButton';
import {
   Navbar as Nb,
   Alignment,
   Button,
   Classes,
   H5,
   NavbarDivider,
   NavbarGroup,
   NavbarHeading,
} from '@blueprintjs/core';

const dark = true;

export const  Navbar = ({switchTheme, theme}) => (
  <Nb  fixedToTop={true} >
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>k<sub>3</sub>g</NavbarHeading>
      <NavbarDivider />
      <Button className={Classes.MINIMAL} icon="home" text="Home" />
      <Button className={Classes.MINIMAL} icon="predictive-analysis" text="Tools" />
      <Button className={Classes.MINIMAL} icon="manual"    text="Docs" />
      <Button className={Classes.MINIMAL} icon="info-sign"    text="About" />
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
      <SwitchThemeButton  switchTheme={switchTheme} theme={theme} />
      <Button className={Classes.MINIMAL} icon="user" />
      <Button className={Classes.MINIMAL} icon="notifications" />
      <Button className={Classes.Minimal} icon="cog" />
    </NavbarGroup>
  </Nb>
)