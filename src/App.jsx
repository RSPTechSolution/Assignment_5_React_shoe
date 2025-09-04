import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import {Routes, Route} from 'react-router-dom'
import Payment from './components/pages/Payment'
import OrderComplete from './components/pages/OrderComplete'
import Kid from './components/pages/Kid'
import Men from './components/pages/Men'
import Women from './components/pages/Women'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/pages/About'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    < ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    <div className='bg-gray-900 text-white'>
      <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden main-wrap">
        <div className="flex h-full grow flex-col">
          <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/category/men' element={<Men/>} />
            <Route path='/category/women' element={<Women/>} />
            <Route path='/category/kids' element={<Kid/>} />
            <Route path='/about-us' element={<About/>} />
            <Route path='/order-completed' element={<OrderComplete/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
