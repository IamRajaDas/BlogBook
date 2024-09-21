import React, { useState, useEffect } from 'react'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const themeMode = useSelector((state) => state.auth.theme);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-white-400 dark:bg-gray-900'>
      <div className='min-h-screen flex flex-col w-full block'>
        <Header />
        <main className='flex-grow'>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App