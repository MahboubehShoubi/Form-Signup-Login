import React from 'react';
import './App.css';
import { Route , Routes } from 'react-router-dom';

import MainPage from './component/MainPage';
import Login from "./component/Login";
import SignUp from "./component/SignUp"; 


const App = () => {
    return (
        <>
          <div>
            <MainPage />

               <Routes>
                   <Route path='/login' element={<Login />} />
                   <Route path='/signup' element={<SignUp />} />
                   <Route to='/' element={<MainPage />} />
               </Routes>

          </div>
        </>
      
    );
};

export default App;