import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  
  // navigation bar component added to the app
  // enable routing for the components
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          {/* route to different components by clicking on the navbar */}
          <Route path='/' element={<Content></Content>}> </Route>
          <Route path='/read' element={<Header></Header>}> </Route>
          <Route path='/create' element={<Footer></Footer>}> </Route>
        </Routes>
      </BrowserRouter >


    </>
  )
}

export default App
