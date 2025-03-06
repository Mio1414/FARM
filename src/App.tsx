import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './pages/Game/Game';
import {BrowserRouter, Routes, Route} from 'react-router'
import Main from './pages/Main/Main';
import Settings from './pages/Settings/Settings';
// import Authorization from './pages/Authorization/Authorization';

import Creators from './pages/Creators/Creators';
import Authorization from './pages/Authorisation/Authorization';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/game' element={<Game/>}/>
          <Route path='/settings' element={<Settings/>}/>
          {/* <Route path='/authorization' element={<Authorization/>}/> */}
          <Route path='/authorization' element={<Authorization/>}/>
          <Route path='/creators' element={<Creators/>}/>

        </Routes>
      </BrowserRouter>
      {/* <Game/> */}
    </div>
    
  );
}

export default App;
