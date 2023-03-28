import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import Home from './components/Home';
import Report from './components/Report';
import Details from './components/Details';
import About from './components/About';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Report",
    element: <Report />,
  },
  {
    path: "Details",
    element: <Details />,
  },
  {
    path: "About",
    element: <About />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


