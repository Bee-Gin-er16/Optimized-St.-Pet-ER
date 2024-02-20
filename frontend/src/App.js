//React library imports

//Component imports
// import Intro from './pages/Intro_page'
// Login, Counter
import { Header } from './components/dashboard_comps';
import { Login } from './components/login_form';
import { Register } from './components/registration_form';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Intro /> */}
      {/* <Login/> */}
      <Register/>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
