import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    resetPasswordContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    formControl: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    error: {
        color: theme.palette.error.main,
        marginTop: theme.spacing(1),
    },
    resetBtn: {
        marginTop: theme.spacing(3),
    },

    paper: {
        height: '200px',
        width: '400px',
        marginTop: '100px',
        padding: theme.spacing(5),
    },

    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#3b364c56',
        textShadow: '5px 5px 10px #3b364c56',
    }
}));

function ResetPassword() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (!email) {
            setError('Email is required');
            return;
        }
        // Send a request to the server to reset the password
        fetch('/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    alert('Password reset link has been sent to your email');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className={classes.resetPasswordContainer}>
            <Link to='/'>
                <span className={classes.title}>HMT CRM</span>
            </Link>
            <Paper elevation={5} className={classes.paper}>
                <Typography variant="h3" component='h6'>Reset Password</Typography>
                <Typography>Enter your email address to reset your password:</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        className={classes.formControl}
                        required
                    />
                    {error && <Typography className={classes.error}>{error}</Typography>}
                    <Button className={classes.resetBtn} type="submit" variant="contained" color="primary">
                        Reset Password
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default ResetPassword;
