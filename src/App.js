import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from './pages/chat/Chat'
import Home from './pages/home/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </>
  )
}

export default App