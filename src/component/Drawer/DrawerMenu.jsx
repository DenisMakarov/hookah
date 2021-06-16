import React, {useState} from 'react';
import { IconButton, Drawer } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import NavigationButtons from '../NavigationButton/NavigationButtons';
import { Hidden } from '@material-ui/core';


const DrawerMenu = (props) => {
  const {sections} = props;
  const [open, setOpen] = useState(false);

  return (
  <>
    <Hidden mdUp>
      <IconButton 
        onClick={() => setOpen(true)} 
        color='inherit'
      >
        <DehazeIcon />
      </IconButton>
    </Hidden>
      <Drawer 
        onClose={() => setOpen(false)} 
        open={open} 
        anchor={'right'}
      >
        <div 
          style={{width: 150}} 
          onClick={() => setOpen(false)}
        >
          <NavigationButtons 
            sections={sections} 
          /> 
        </div>
      </Drawer>
  </>
  )
}

export default DrawerMenu;