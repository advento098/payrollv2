import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.tsx';
import Dashboard from './components/pages/Dashboard/Dashboard.tsx';
import Attendance from './components/pages/Attendance/Attendance.tsx';
import SettingsPage from './components/pages/SettingsPage.tsx';

import LoginPage from './components/pages/Login/LoginPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: 'dashboard', Component: Dashboard },
      { path: 'assignment', Component: Attendance },
      { path: 'edit', Component: SettingsPage },
    ],
    ErrorBoundary: Error,
  },
  {
    path: '/login',
    Component: LoginPage,
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
