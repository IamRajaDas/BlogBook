import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ThemeBtn from './themeBtn'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]


  return (
    <header className='sticky top-0 left-0 right-0 z-10 shadow py-3 shadow bg-white dark:bg-gray-800 dark:text-white'>
      <Container>
        <nav className='flex flex-wrap items-center justify-between'>
          <div className='mr-4 flex-shrink-0'>
            <Link to='/'>
              <Logo width="300px"  className="sm:w-48 md:w-56 lg:w-72" />

            </Link>
          </div>
          <ul className='flex ml-auto md:flex-row items-center ml-auto space-y-2 md:space-y-0 md:space-x-4'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full dark:hover:text-black'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            {
              <li>
                <ThemeBtn/>
              </li>
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header