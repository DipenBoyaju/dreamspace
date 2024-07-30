import { useState } from 'react';
import './navbar.scss'
import { TbMenu2 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;
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
        {user ? (
          <div className='user'>
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>John Doe</span>
            <Link to='/profile' className='profile'>
              <div className="notification">5</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">Sign up</a></>)}
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