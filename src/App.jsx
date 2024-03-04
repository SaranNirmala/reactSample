/* eslint-disable no-unused-vars */
import Home from './Components/Home'

import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Main from './Components/Main'
import StateChange from './Components/StateChange'
import Main1 from './Components/Main1'
import { useState } from 'react'
import Props from './Components/Props'
import Child from './Components/Child'
import Conditional from './Components/Conditional'

function App() {

  const [getValue, setValue] = useState('Hello')


  console.log("Hello I am from APP", getValue)
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
       {/* <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/contact' element={<Contact />}/> */}
       {/* <Route path='/' element={<Main1 />}/> */}
       {/* <Route path='/' element={<Main />}/> */}
       {/* <Route path='/' element={<StateChange />}/> */}
       {/* <Route path='/' element={<Props />}/>
       <Route path='/child' element={<Child />}/> */}
      </Routes>
      </BrowserRouter>

    {/* <Props getValue={getValue} setValue={setValue}/>
    <Child getValue={getValue}/> */}
    <Conditional />
    </div>
  )
}

export default App
