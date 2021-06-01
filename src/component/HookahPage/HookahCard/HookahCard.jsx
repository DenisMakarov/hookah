import React from 'react'
import Rating from '@material-ui/lab/Rating';
import { Typography, Card, CardMedia, CardContent, Box, CardActions, Grid, Button, CardHeader, Divider, IconButton, Fab } from '@material-ui/core'
import AddIcon  from '@material-ui/icons/Add'; 

import useStyles from './styles'

const HookahCard = ({hookah}) => {
    const classes = useStyles()

    return (
            <Card className={classes.root}>
                <CardHeader 
                    variant="h2"  
                    title={hookah.name}
                    action={
                        <IconButton size="small" aria-label="Add-to-mixology">
                            <AddIcon />
                        </IconButton>
                    }
                />
                    <CardMedia className={classes.media} image={hookah.image} title={hookah.name} />
                        <CardContent>
                            <Box className={classes.cardContent} >
                                <Typography variant="subtitle2" color="textSecondray" gutterBottom>
                                    {hookah.taste}
                                </Typography>
                                <Typography variant="body1">
                                        Cost :{hookah.price}
                                </Typography>
                            </Box>
                            <Divider />
                            <Typography variant="subtitle2">
                                {hookah.descriptions}
                            </Typography>
                        </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button>
                            Read More
                        </Button>
                        <Rating name="half-rating" defaultValue={hookah.value} size="small" />
                    </CardActions>
            </Card>
    )
}

export default HookahCard;