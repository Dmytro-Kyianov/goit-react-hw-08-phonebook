import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Spinner } from './Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Spinner />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route
                path="register"
                element={
                  <RestrictedRoute
                    component={Registration}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute component={Login} redirectTo="/contacts" />
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute component={Contacts} redirectTo="/login" />
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};