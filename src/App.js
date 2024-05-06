
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Home } from './components/pages/home/home';
import Login from './components/pages/login/login';
import Player from './components/player/player';
import { auth } from './firebase';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged In")
         navigate('/')
      }else{
        console.log("Logged Out")
        navigate('/login')
      }
    })
  },[])
  
  return (
<>
<ToastContainer theme='dark'/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/player/:id' element={<Player></Player>}></Route>
  <Route></Route>
</Routes>

</>
  ); 
}

export default App;
