import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubmitForm from './components/submitForm/SubmitForm.jsx';
import submitForm2 from './components/submitForm2/submitForm2.jsx';
import UseRef from './components/useRef/UseRef.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/submitForm',
    Component: SubmitForm
  },
  {
    path: '/submitForm2',
    Component: submitForm2
  },
  {
    path: '/useref',
    Component: UseRef
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
