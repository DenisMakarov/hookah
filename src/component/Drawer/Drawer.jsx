import React from 'react';
import { IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';

const Drawer = () => {
  return (
    <IconButton onClose={() => setOpen(false)} open={open} anchor={'right'}>
      <DehazeIcon />
    </IconButton>
  )
}