import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        borderRadius: '2%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', //16:9
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}))