import Axios from 'axios';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CurrentUserContext } from '../../contexts/current-user.context';
import { withRouter } from 'react-router';
import Header from '../../pages/header/header.comopnent';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const SleepCard = ({ history }) => {
    const classes = useStyles();
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //moving to home page
            history.push('/sleep/collect/1');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <Header />
            <Grid
                container
                spacing={10}
                direction="row"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Paper
                    elevation={3}
                    style={{
                        width: 250,
                        padding: 20,
                    }}
                >
                    <br />
                    <br />
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        Your sleep score is 70% but few measures needed to get you better sleep.
                        <br />
                        <Button
                            size="large"
                            type="submit"
                            variant="contained"
                            style={{ color: 'white', backgroundColor: '#469ac6', padding: '15px 95px' }}
                            disableElevation
                        >
                            Done
            </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default withRouter(SleepCard);
