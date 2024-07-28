import { useState } from 'react';
import './navbar.scss'
import { TbMenu2 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <div className="logo">
          <img src={logo} alt="" />
          <span className="logotext">DreamSpace</span>
        </div>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">Sign up</a>
        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          {open ? <RxCross2 /> : <TbMenu2 />}
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar