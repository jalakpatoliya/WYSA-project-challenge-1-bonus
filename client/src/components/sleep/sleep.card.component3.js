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
    const [wakeTime, setWakeTime] = useState('');

    const updateBedTime = (e) => {
        setWakeTime(e.target.value);
        // setWakeTime(`2021-01-16T${e.target.value}+5:30`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const bodyParameters = {
                "updateObject": {
                    "wakeTime": `2021-01-16T${wakeTime}+05:30`,
                    "dataCollectionStep": 3
                }
            };
            const {
                data: { data },
            } = await Axios.post(`/api/v1/sleep/update/details`, bodyParameters, {
                headers: { Authorization: `Bearer ${currentUser.token}` },
            });
            //moving to home page
            history.push('/sleep/collect/4');
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
                        What time do you get out of bed to start your day?
                        <TextField
                            required
                            type="text"
                            onChange={updateBedTime}
                            value={wakeTime}
                            id="outlined-basic"
                            placeholder="hh:mm:ss"
                            variant="outlined"
                        />
                        <br />
                        <Button
                            size="large"
                            type="submit"
                            variant="contained"
                            style={{ color: 'white', backgroundColor: '#469ac6', padding: '15px 95px' }}
                            disableElevation
                        >
                            Next
            </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default withRouter(SleepCard);
