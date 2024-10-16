import { Outlet } from 'react-router'
import Header from './Components/Header'
import Footer from './Components/Footer'

export default function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

