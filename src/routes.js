import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/privacy',
        element: <Privacy />
      },
      {
        path: '/terms',
        element: <Terms />
      }
    ]
  }
]);