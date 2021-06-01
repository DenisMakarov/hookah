import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Grid, Paper, Typography, Link } from '@material-ui/core'


const useStyle = makeStyles((theme) => ({
    mainContent: {
        padding: theme.spacing(8, 1, 6),
    },
    mainPost: {
        position: 'relative',
        color: 'theme.palette.common.white',
        backgroundColor: theme.palette.grey[800],
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
    },
}))

export default function MainPost() {
    const classes = useStyle()
    
    return (
        <Container maxWidth="xl" component="main" className={classes.mainContent}>
        <Paper className={classes.mainPost} style={{ backgroundImage: `url(${'/assets/Hookah2.png'})` }}>
            <Container maxWidth>
                <Grid container>
                    <Grid item md={6}>
                        <Box className={classes.mainPostContent}>
                            <Typography
                                component="h1"
                                variant="h3"
                                color="inherit"
                                gutterBottom
                            >
                                Hookah Blog
                            </Typography>
                            <Typography
                                variant="h5"
                                color="inherit"
                                paragraph
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ratione suscipit, ipsa possimus vitae dolore corrupti doloremque facilis delectus quos maiores odit temporibus quam modi laborum ipsum neque? 
                                Nemo, accusantium non?
                            </Typography>
                            <Link variant="subtitle1" href="#">
                                Continue reading…
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        </Container>
    )
}