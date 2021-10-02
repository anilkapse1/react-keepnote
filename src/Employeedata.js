import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardStyle:{
        width:270,
        display:'inline-block',
        margin:'20px',
        backgroundColor: '#232323',
        color: '#fff',

    }
});

const EmployeeData = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <>
      
            <Card className={classes.root} className={classes.cardStyle}>
                    <CardContent>
                        <Typography variant="overline" className={classes.title}gutterBottom>
                            {props.userName}
                        </Typography>
                        <Typography variant="h5" component="h2" style={{color:'palevioletred'}}>
                        {props.date}
                        </Typography>
                        <Typography  variant="overline" className={classes.pos}>
                            Project: {props.project}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Task: {props.taskId}
                            <ul>
                            <li>{props.task1}</li>
                            <li>{props.task2}</li>
                            </ul> 
                        </Typography>
                    </CardContent>
                </Card>

        
        </>
    )

}

export default EmployeeData;