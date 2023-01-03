import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink to='/githubreact' className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-600 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">MobieBox</span>
          </NavLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to='/githubreact' className="mr-5 text-white hover:text-gray-100">Home</NavLink>
            <NavLink to='/githubreact' className="mr-5 text-white hover:text-gray-100">Latest Movie</NavLink>
            <NavLink to='/githubreact' className="mr-5 text-white hover:text-gray-100">Popular Movie</NavLink>
            <NavLink to='/githubreact' className="mr-5 text-white hover:text-gray-100">Hollywood</NavLink>
            <NavLink to='/githubreact' className="mr-5 text-white hover:text-gray-100">South Movie</NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar