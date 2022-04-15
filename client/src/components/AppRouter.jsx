import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import About from '../pages/About';
import Error from '../pages/Error';
import PostidPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
import { publickRoutes, privateRoutes } from '../router'
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  } 

  return (
    isAuth ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            key={Date.now()}
            element={route.component}
            path={route.path}
            exact={route.exact}
          />
        )}
        <Route path="*" element={<Navigate replace to="/posts" />} />
      </Routes>
      :
      <Routes>
        {publickRoutes.map(route =>
          <Route
            key={Date.now()}
            element={route.component}
            path={route.path}
            exact={route.exact}
          />
        )}
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
  );
}

export default AppRouter;
