import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';

// path
import { PATH_PAGE, PATH_AUTH } from './paths';

// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // User AUTH
    {
      path: '/user',
      children: [
        {
          path: PATH_AUTH.login,
          element: <Login />,
        },
        {
          path: PATH_AUTH.register,
          element: <UserRegister />,
        },
        {
          path: PATH_AUTH.adproduct,
          element: <AddProduct />,
        },
      ],
    },

    // Home routes
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: PATH_PAGE.about, element: <About /> },
        { path: PATH_PAGE.contact, element: <Contact /> },
        { path: PATH_PAGE.businessProfile, element: <BusinessProfile /> },
      ],
    },
  ]);
}

// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));

// About
const About = Loadable(lazy(() => import('../pages/About')));

// contact us
const Contact = Loadable(lazy(() => import('../pages/Contact')));

// Login
const Login = Loadable(lazy(() => import('../pages/auth/Login')));


// businessProfile
const BusinessProfile = Loadable(lazy(() => import('../pages/BusinessProfile')));

// Register
const UserRegister = Loadable(lazy(() => import('../pages/auth/UserRegister')));


// adProduct page
const AddProduct = Loadable(lazy(() => import('../pages/product/AdProduct')));

