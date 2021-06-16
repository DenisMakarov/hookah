import React from 'react';
import { AppBar, Hidden, Toolbar, Typography } from '@material-ui/core';
import NavigationButtons from '../NavigationButton/NavigationButtons';
import DrawerMenu from '../Drawer/DrawerMenu';

import useStyles from './styles'


const sections = [
  {title: 'Home', url: '/'},
  {title: 'HookahPage', url: '/hookahpage'},
  {title: 'Mixology', url: '/mixology'},
  {title: 'Sign Up', url: '/signup'},
]


const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar 
        className={classes.appBar} 
        elevation={0} 
        position='static'
      >
        <Toolbar>
          <Typography
            color='inherit'
            variant='h6' 
            style={{ flexGrow: 1 }}
          >
            HookahFriends
          </Typography>
          <Hidden smDown>
            <NavigationButtons sections={sections} />
          </Hidden>
          <DrawerMenu sections={sections} />
        </Toolbar>
      </AppBar>
    </>
  )
}


export default Header;