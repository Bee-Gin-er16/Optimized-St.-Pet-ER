import home_style from '../styles/home.module.css'

const Home = (props) => {
    return (
      <>
      <div className={home_style.homepage}>
        <h1>This is home</h1>
        {(props.isNotLoggedIn) ? <h2 style={{color: "red"}}>You are not authorized to access this without logging in</h2>:
        <h2 style={{color: "green"}}>Welcome user</h2>}
      </div>
      </>
    );
}

export { Home }