import React from 'react';
import { Button, Classes } from '@blueprintjs/core';


export const SwitchThemeButton = ({theme, switchTheme}) => {

  return <Button 
    className={Classes.MINIMAL} 
    icon={theme === 'dark' ? 'moon' : 'flash'} 
    onClick={switchTheme}
  />
}