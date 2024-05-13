import head_style from '../styles/header.module.css';
import Logo from '../img/Logo.png';
import { NavLink , Outlet } from 'react-router-dom';

const Header = (props) => {
    return (
      <>
      <header className={head_style.header}>
        <img className={head_style.brand_logo_nav} src={Logo} alt="St.Pet-ER brand_logo"/>
          <span>
              <img src="#" alt="icon-profile" />
              {(props.name.length === 0) ? `Welcome Guest` : `Welcome ${props.name} ` }
          </span>
        <nav>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="login">Login</NavLink>
            <NavLink to="register">Register</NavLink>
            <NavLink to="profile">Profile</NavLink>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      </>
    );
}

export {Header}