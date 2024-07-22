import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Partners from './pages/Partners'
import Rooms from './pages/Rooms'
import RoomDetails from './pages/RoomDetails'
import Home from './pages/Home'
import './App.css'

const App = () => {
  return (
    <>
    {/* <div className='habyt-container'> */}
      <Header
        country=''
        isBlackHeader={window.location.pathname === '/partners'}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/stays/:country' element={<Rooms />} />
        <Route path='/room/:country/:roomId' element={<RoomDetails />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer isBlackFooter={window.location.pathname === '/partners'} />
{/*     </div> */}
  </>
  )
}

export default App
