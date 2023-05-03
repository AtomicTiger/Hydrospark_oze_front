import './App.css';
import MainPage from './components/MainPage/MainPage';
import ContactPage from './components/ContactPage/ContactPage';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import RootLayout from './components/DarkLayout/DarkLayout';

const router = createBrowserRouter([
  {path: '/',
  element: <RootLayout/>,
  children: [
    {path: '/', element: <MainPage></MainPage>}
  ]},
  {path: '/contact', element: <ContactPage></ContactPage>}
])

function App() {
  return (
    <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
