import React from 'react';
import {Main} from '../Components/Main';
import Sidebar from './Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main11 } from '../Utility/Main11';



export default function MainBody() {

  return (
    <>
      <BrowserRouter>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{
            width: '18%', borderRadius: '10px',
            backgroundColor: 'rgb(205, 202, 206)', padding: ' 20px auto'
          }}>
            <Sidebar />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', margin: ' 20px auto' }}>
            <Routes>
              <Route path='/utility' element={<Main11 />} />
              <Route path='/transaction' element={<Main />} />
            </Routes> </div> </div>
      </BrowserRouter>
    </>)
}
