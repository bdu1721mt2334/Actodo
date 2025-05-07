import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Landing from './pages/Landing';
import React from 'react';
import { useState } from 'react';


function App() 
{
  const [users,setusers] = useState(
      [
          {
              username:"sujan",
              password:"123"
          }
      ]
  )

  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Login users={users} setusers={setusers}/>}> </Route>
                  <Route path='/signup' element={<Signin users={users} setusers={setusers}/>}></Route>
                  <Route path='/landing' element={<Landing />}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  )

}

export default App

