import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import DarkLayout from './components/DarkLayout/DarkLayout';
import LightLayout from './components/LightLayout/LightLayout';

//Strona jest podzielona na Dark = login
// oraz Light = cała reszta
//jest tak bo nie mogą być te same routy a light jest od /
const router = createBrowserRouter([
  {path: '/',
  element: <LightLayout/>,
  children: [
    {path: '/', element: <MainPage/>},
    // {path: '/user', element: <UserPage/>} to ma być strona która działa na pobranych danych i jest inna dla każdego usera
      // {path: '/xxx', element: <DevicePage/>} inna strona dla każdego użądzenia generowana z tabeli, (albo nie)
    // {path: '/document', element: <DocumentPage/>}
    // {path: '/contact', element: <ContactPage/>}
  ]},
  {path: '/login',
  element: <DarkLayout/>,
  children: [
    {path: '/login', element: <LoginPage/>}
  ]},
])

function App() {
  return (
    <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
