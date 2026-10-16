
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Add from './pages/Add'

function App() {
 

  return (
  <>
 <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/add' element={<Add/>}/>

<Route path='/user/edit/:id' element={<Edit/>}/>


 </Routes>
  </>
  )
}

export default App
