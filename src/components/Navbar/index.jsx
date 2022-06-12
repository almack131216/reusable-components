import React from "react"

const Navbar = () => {
  return (
    <>
      <header>
        <h1 className='logo'>Logo</h1>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/styles'>Styles</a>
            </li>
          </ul>
        </nav>
        <label for='nav-toggle' className='nav-toggle-label'>
          <span></span>
        </label>
      </header>
    </>
  )
}

export default Navbar
