import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        margin: theme.spacing(1),
        color: theme.palette.text.primary,  
    }, 
}));

export default function Links(props) {
    
    const { sections } = props;
    const classes = useStyles()


    return (
        <nav>
            {sections.map((section) => (
                <Link 
                    noWrap
                    variant='body2'
                    key={section.tittle}
                    color="inherit" 
                    to={section.url} 
                    className={classes.link}
                >
                    {section.title}                       
                </Link>
            ))}
        </nav>
    )    
}
