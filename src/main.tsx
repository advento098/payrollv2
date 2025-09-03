import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.tsx';
import Dashboard from './components/pages/Dashboard/Dashboard.tsx';
import Attendance from './components/pages/Attendance/Attendance.tsx';
import Edit from './components/pages/Edit.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, path: '/dashboard', Component: Dashboard },
      { path: '/assignment', Component: Attendance },
      { path: '/edit', Component: Edit },
    ],
    ErrorBoundary: Error,
  },
]);

// Placeholder for error boundaries
function Error() {
  return <div>404 page not found</div>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
