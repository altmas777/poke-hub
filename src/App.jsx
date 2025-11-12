import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { PokeProvider } from './context/PokeContext'
import Navbar from './components/Navbar'
import Normal from './pages/Normal'
import Hard from './pages/hard'
import Easy from './pages/Easy'
import MainPage from './pages/mainpage'


const App = () => {
  return (
    <PokeProvider>
    <Router>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/easy' element={<Easy/>}/>
      <Route path='/Normal' element={<Normal/>}/>
      <Route path='Hard' element={<Hard/>}/>
    </Routes>

    </Router>

     
    </PokeProvider>
  )
}

export default App
