import React from 'react'
import { MdDarkMode } from "react-icons/md";
// import themeContext from '../context/ThemeContext';

const Navbar = () => {

  // const { darktheme, dispatch } = useContext(themeContext);

  // const changeTheme = ()=> {
  //   dispatch ({
  //     type : " CHANGE_THEME"
  //   })
  // }

  return (
    <nav className="navbar bg-secondary text-light">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold text-light" href="#"> Todo Application with Context</a>
    <a className="navbar-brand text-light " href="#" > <MdDarkMode /></a>

  </div>
</nav>
  )
}

export default Navbar
