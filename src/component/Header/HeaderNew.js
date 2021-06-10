import React, { useState } from 'react';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import DehazeIcon from '@material-ui/icons/Dehaze';


const useStyles = makeStyles(theme => ({
  sectionDesctop: {
    display: "none",
    [theme.breakpoints.up('md')]: {
      display: "flex",
    },
  },
  appBar: {
    background: "none",
  },
  iconButton: {
    display: "none",
    [theme.breakpoints.down('sm')]: {
      display: "flex",
    },
  },
}))




const HeaderNew = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const list = () => (
    <div style={{width: 150}} onClick={() => setOpen(false)}>
      <List>
        <ListItem button component={Link} to='/'>
          Hoome
        </ListItem>
        <ListItem button component={Link} to='/hookahpage'>
          HookahPage
        </ListItem>
      </List>
    </div>
  )

  return (
    <>
      <AppBar className={classes.appBar} elevation={0} position='static'>
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1 }}>
            HookahFriends
          </Typography>
          <Box className={classes.sectionDesctop}>
            <Button color='inherit' component={Link} to='/' >
              Home
            </Button>
            <Button color='inherit' component={Link} to='/hookahpage'>
              HookahPage
            </Button>
            <Button color='inherit'>
              Sign Up
            </Button>
          </Box>
          <IconButton className={classes.iconButton} onClick={() => setOpen(true)} color='inherit' >
            <DehazeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer onClose={() => setOpen(false)} open={open} anchor={'right'}>
        {list()}
      </Drawer>
    </>
  )
  
}

export default HeaderNew