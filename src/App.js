import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Login from './Components/Login';
import Home from './Components/Home';
import Cards from './Components/Cards';
import Sufg from './Components/Sufg';
import { AdminPanelSettings } from '@mui/icons-material';
import Conact from './Components/Conact';
import Admin from './Components/Admin';
import DataView from './Components/DataView';
import Feedback from './Components/Feedback';
import Bootm from './Components/Bootm';
import Dash from './Components/Dash';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Login/> */}
    {/* <Sufg/> */}

      <Routes>
      <Route path='/' element={<><Navbar/><Home/></>}/>
  
<Route path='/Login' element={<><Navbar/><Login/></>}/>
    <Route path='/Signin' element={<><Navbar/><Signin/></>}/>
    <Route path='/Cards' element={<><Sufg/><Cards/><DataView/></>}/>
<Route path='/Conact' element={<><Conact/></>}/>
<Route path='/Feedback' element={<><Feedback/></>}/>
{/* <Route path='/Admin' element={<Admin/>}/> */}

<Route path='/Bootm' element={<><Bootm/></>}/>
<Route path='/Dash' element={<><Dash/></>}/>

</Routes>
    </div>
  );
}

export default App;
