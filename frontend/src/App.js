//React library imports

//Component imports
// import Intro from './pages/Intro_page'
// Login, Counter
import { Profile } from './components/profile';
import { Header } from './components/header'
import { Home } from './components/home'
import { Login } from './components/login_form';
import { Register } from './components/registration_form';
import { ErrorPage } from './components/errorpage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const myroute = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage/>
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
