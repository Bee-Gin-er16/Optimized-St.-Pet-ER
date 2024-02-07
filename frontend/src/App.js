//React library imports

//Component imports
// import Intro from './pages/Intro_page'
// Login, Counter
import { Header } from './components/dashboard_comps';
import { Register } from './components/login_forms';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Intro /> */}
      {/* <Login/> */}
      <Register/>
      {/* <Register/> */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
