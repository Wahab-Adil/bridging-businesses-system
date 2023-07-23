import { Suspense, lazy } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';

// path
import { PATH_PAGE, PATH_AUTH } from './paths';

// components
import LoadingScreen from '../components/LoadingScreen';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const Navigate = useNavigate();
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
          path: PATH_AUTH.resetPassword,
          element: <ResetPassword />,
        },
        {
          path: PATH_AUTH.adproduct,
          element: <AddProduct />,
        },
        {
          path: PATH_AUTH.specificProudct,
          element: <AddProduct />,
        },
        {
          path: PATH_AUTH.checkOut,
          element: <CheckoutPage />,
        },
        {
          path: PATH_AUTH.registerComplete,
          element: <RegisterComplete />,
        },
        {
          path: PATH_AUTH.CompleteForgotPassword,
          element: <CompleteForgotPassword />,
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
        { path: PATH_PAGE.createProfile, element: <CreateProfile /> },
        { path: PATH_PAGE.businessProfile, element: <BusinessProfile /> },
        { path: PATH_PAGE.updateProfile, element: <UpdateProfile /> },
        { path: PATH_PAGE.payment, element: <PaymentPage /> },
        { path: PATH_PAGE.addToCart, element: <AddToCart /> },
        { path: PATH_PAGE.prodcutdetails, element: <ProductDetails /> },
        { path: PATH_PAGE.ConfirmPassword, element: <ConfirmPassword /> },
        { path: PATH_PAGE.NewPassword, element: <NewPassword /> },

        { path: PATH_PAGE.UserProfile, element: <UserProfile /> },
      ],
    },

    // Not Found
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [{ path: '*', element: <NotFoundPage /> }],
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

// Register
const UserRegister = Loadable(lazy(() => import('../pages/auth/UserRegister')));

// reset Password
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));

// businessProfile
const BusinessProfile = Loadable(lazy(() => import('../pages/profile/BusinessProfile')));

// createProfile
const CreateProfile = Loadable(lazy(() => import('../pages/profile/create/CreateProfile')));

// UpdateProfile
const UpdateProfile = Loadable(lazy(() => import('../pages/profile/update/UpdateProfile')));

// businessProfile
const PaymentPage = Loadable(lazy(() => import('../pages/Payment')));

// adProduct page
const AddProduct = Loadable(lazy(() => import('../pages/product/AdProduct')));

// ProductDetails page
const ProductDetails = Loadable(lazy(() => import('../pages/product/ProductDetails')));

// checkout page
const CheckoutPage = Loadable(lazy(() => import('../pages/checkout/Checkout')));

// Add To Cart page
const AddToCart = Loadable(lazy(() => import('../pages/Cart/ProductList')));

// Not Found page
const NotFoundPage = Loadable(lazy(() => import('../pages/Page404')));

// confirm passowrd
const ConfirmPassword = Loadable(lazy(() => import('../pages/auth/ConfirmPassword')));

// new passowrd
const NewPassword = Loadable(lazy(() => import('../pages/auth/NewPassword')));

// complete Register
const RegisterComplete = Loadable(lazy(() => import('../pages/auth/CompleteAuth')));

// complete Forgot Password
const CompleteForgotPassword = Loadable(lazy(() => import('../pages/auth/CompleteForgotPassword')));

// UserProfile
const UserProfile = Loadable(lazy(() => import('../pages/profile/UserProfile')));