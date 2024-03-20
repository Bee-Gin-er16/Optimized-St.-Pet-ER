import head_style from '../styles/header.module.css';
import Logo from '../img/Logo.png';

const Header = (props) => {
    return (
      <>
      <header className={head_style.header}>
        <img className={head_style.brand_logo_nav} src={Logo} alt="St.Pet-ER brand_logo"/>
        <nav>
          <span><img src="#" alt="icon-profile" /></span>
          <span>
              {(props.name.length === 0) ? `Welcome Guest` : `Welcome ${props.name} ` }
          </span>
          <hr />
          <ul>Home</ul>
          <ul>Profile</ul>
          <ul>History</ul>
          <ul>Schedule</ul>
        </nav>
      </header>
      </>
    );
}

export {Header}