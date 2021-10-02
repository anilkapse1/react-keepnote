import React from 'react';
import EmployeeData from './EmployeeData';
import Data from './Data';
import Container from '@material-ui/core/Container';

const App=()=>{
    console.log(Data);
    const callfunc = (value)=>{
        return(
            <EmployeeData 
            key={value.id} 
            userName={value.userName} 
            role={value.role} 
            date={value.date} 
            project={value.project}
            taskId={value.task.taskId}   
            task1={value.task.one}   
            task2={value.task.two}   
            />
        )    

    }

    return(
        <>
            <Container fixed>
            <h1 style={{textTransform:'uppercase'}}>Employee task details:  </h1>
            {Data.map(callfunc)} 
            </Container>
        </>
    )
}

export default App;