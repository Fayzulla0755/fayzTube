import React from "react";
import {Box} from '@mui/material'
import {Routes, Route} from 'react-router-dom'
import {Main , CHannel ,VideoDetail, Search,Navbar} from '../'

export default function App() {
   
    return (
        <Box>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/channel/:id' element={<CHannel />} />
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/search/:id' element={<Search/>} />
            </Routes>
        </Box>
    );
}
