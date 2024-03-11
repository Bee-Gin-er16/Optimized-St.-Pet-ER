//React library imports

//Component imports
// import Intro from './pages/Intro_page'
// Login, Counter
import { Header, Home, Profile} from './components/dashboard_comps';
import { Login } from './components/login_form';
import { Register } from './components/registration_form';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const myroute = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/home",
    element: <Home isNotLoggedIn={false}/>
  },
  {
    path: "/profile",
    element: <Profile/>
  }
]);

function App() {
  return (
    <div className="App">
      <Header name="" />
      <RouterProvider router={myroute}/>
    </div>
  );
}

export default App;
