import  { useState } from 'react';
import {FormGroup,FormControl, InputLabel, Input,Typography,Button,styled} from '@mui/material';
import { addSprint } from '../service/api';

import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
        width: 50%;
        margin: 5% 0 0 25%;
        & > div {
            margin-top: 20px;
`;

const initialValue = {
    sprintName: '',
    taskName: '',
    description: '',
    status: ''
}
const AddSprint = () => {

    const [sprint, setSprint] = useState(initialValue);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        
        setSprint({...sprint, [e.target.name]: e.target.value})
        console.log(sprint);
    }

    const addsprintDetails = async() =>{
        await addSprint(sprint);
        navigate('/all');
    }

    return(
        <Container>
            <Typography variant='h4'>Add Sprint</Typography>
            <FormControl>
                <InputLabel>Sprint</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="sprintName"/>
            </FormControl>
            <FormControl>
                <InputLabel>Task Type</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="taskName"/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="description"/>
            </FormControl>
            <FormControl>
                <InputLabel>Status</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="status"/>
            </FormControl>
            <FormControl>
                <Button onClick={() => addsprintDetails()} variant='contained' > Add Sprint</Button>
            </FormControl>
        </Container>
    );
}

export default AddSprint;