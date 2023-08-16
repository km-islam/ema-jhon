
import { Outlet } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/header/Header'

function App() {


  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
