import { AppBar, Toolbar, Typography,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const Navbar = () => {
  return(
      <AppBar position='static'>
         <Toolbar>
              <Tabs to="./" exact>Task Planner</Tabs>
              <Tabs to="all" exact>All Sprint</Tabs>
              <Tabs to="add" exact>Add Sprint</Tabs>
         </Toolbar>
      </AppBar>
  );

}

export default Navbar;