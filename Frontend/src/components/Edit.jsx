import  { useState , useEffect } from 'react';
import {FormGroup,FormControl, InputLabel, Input,Typography,Button,styled} from '@mui/material';
import { getSprint1 , editSprint} from '../service/api';

import {useNavigate , useParams} from 'react-router-dom';

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
const Edit = () => {

    const [sprint, setSprint] = useState(initialValue);
    
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        getSprintData();
    },[]);

    const getSprintData = async () =>{
       let response = await getSprint1(id);
       setSprint(response.data);
    //    console.log(response);
    }

    const onValueChange = (e) => {
        
        setSprint({...sprint, [e.target.name]: e.target.value})
        console.log(sprint);
    }

    const editsprintDetails = async() =>{
        await editSprint(id,sprint);
        navigate('/all');
    }

    return(
        <Container>
            <Typography variant='h4'>Edit Sprint</Typography>
            <FormControl>
                <InputLabel>Sprint</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="sprintName" value={sprint.sprintName} />
            </FormControl>
            <FormControl>
                <InputLabel>Task Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="taskName" value={sprint.taskName} />
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="description" value={sprint.description} />
            </FormControl>
            <FormControl>
                <InputLabel>Status</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="status" value={sprint.status} />
            </FormControl>
            <FormControl>
                <Button onClick={() =>  editsprintDetails()} variant='contained' > Edit Sprint</Button>
            </FormControl>
        </Container>
    );
}

export default Edit;