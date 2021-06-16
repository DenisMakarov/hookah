import React from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

import useStyles from './styles.js'

const NavigationButtons = (props) => {
const { sections } = props;
const classes = useStyles();

  return (
    <div>
      {sections.map((section) => (
        <Button
          color='inherit'
          key={section.title}
          variant='body2'
          component={Link}
          to={section.url}
          className={classes.button}
        >
          {section.title}
        </Button>
      ))}
    </div>
  )
}

export default NavigationButtons;