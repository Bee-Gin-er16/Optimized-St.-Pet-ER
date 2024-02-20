//React library imports

//Component imports
// import Intro from './pages/Intro_page'
// Login, Counter
import { Header } from './components/dashboard_comps';
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
  }
]);

function App() {
  return (
    <div className="App">
      <Header/>
      <RouterProvider router={myroute}/>
    </div>
  );
}

export default App;
