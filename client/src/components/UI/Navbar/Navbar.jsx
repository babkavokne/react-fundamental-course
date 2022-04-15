import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context';
import Mybutton from '../button/MyButton';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
    <Mybutton onClick={logout}>Выйти (совсем)</Mybutton>
      <nav className="links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </nav>
    </div>
  )
}

export default Navbar;