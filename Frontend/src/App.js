
import './App.css';


// components

import NavBar from './components/NavBar';
import TaskPlanner from './components/TaskPlanner';
import AllSprint from './components/AllSprint';
import AddSprint from './components/AddSprint';
import Edit from './components/Edit';

import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element={<TaskPlanner/>} / >
            <Route path="/all" element={<AllSprint />} />
            <Route path="/add" element={<AddSprint/>} />
            <Route path="/edit/:id" element={<Edit/>} />
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
