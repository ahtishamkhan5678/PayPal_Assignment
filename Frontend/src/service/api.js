import axios from 'axios';

const usersUrl = 'http://localhost:8080';


export const getSprint = async (id) => {
      id = id || '';
      try {
        return await axios.get(`${usersUrl}/sprints/${id}`);
    } catch (error) {
        console.log('Error while calling getSprint api ', error);
    }
}

export const addSprint = async (sprint) => {
  return await axios.post(`${usersUrl}/sprint`, sprint);

}


export const getSprint1 = async (data) => {
  // try{
  //  return await axios.get(`${API_URL}/${data}`);
  // }catch(error){
  //  console.log("Error while calling getSprint1 api", error.message);
  // }
}



export const deleteSprint = async (id) => {
  return await axios.delete(`${usersUrl}/sprint/${id}`);
}

export const editSprint = async (id,sprint) => {
  return await axios.put(`${usersUrl}/sprint`, sprint);
}
