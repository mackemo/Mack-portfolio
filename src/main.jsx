import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'

import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
