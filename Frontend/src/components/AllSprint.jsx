
import { useEffect ,useState} from "react";
import { Table, TableBody, TableCell, TableHead, TableRow ,styled, Button} from "@mui/material";
import { getSprint,deleteSprint } from "../service/api";
import { Link } from "react-router-dom";


const StyleTable =styled(Table)`
    
   width :90%;
   margin:50px auto 0 auto;

`;

const Thead = styled(TableRow)`
  background: #000;
  & > th{
    color : #fff;
    font-size:20px;
  }
`;

const TBody = styled(TableRow)`
  
  & > td{
    font-size:20px;
  }
`;

const AllSprint =()=>{
    
    const[sprints,setSprint]=useState([]);

    useEffect(()=>{
        getsprintDetails();
    },[]);



    const  getsprintDetails = async() =>{
        let response = await getSprint();
        console.log(response);
        setSprint(response.data);
    }

    const deleteSprintData = async(id) =>{
       await deleteSprint(id);
       getsprintDetails();
    }

    return(
        <StyleTable>
            <TableHead>
               <Thead>
                   <TableCell>Id</TableCell>
                   <TableCell>Sprint</TableCell>
                   <TableCell>Task Name</TableCell>
                   <TableCell>Description</TableCell>
                   <TableCell>Status</TableCell>
                   <TableCell></TableCell>
               </Thead>
            </TableHead>
            <TableBody>
                  {
                    sprints.map(sprint =>(
                        <TBody>
                                <TableCell>{sprint.id}</TableCell>
                                <TableCell>{sprint.sprintName}</TableCell>
                                <TableCell>{sprint.taskName}</TableCell>
                                <TableCell>{sprint.description}</TableCell>
                                <TableCell>{sprint.status}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={ {marginRight :8}} component={Link} to={`/edit/${sprint.id}`}>Edit</Button>
                                    <Button variant="contained" color="warning" onClick={()=> deleteSprintData(sprint.id)}>Delete</Button>
                                </TableCell>
                        </TBody>
                    ))
                  }
            </TableBody>
        </StyleTable>
    );
}

export default AllSprint;