import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import config from '../core/config/routes.config';
const Router: React.FC = function (): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={config.main.path} element={<config.main.element />} />
        <Route path={config.cart.path} element={<config.cart.element />} />
        <Route path={config.order.path} element={<config.order.element />} />
        <Route path={config.notFound.path} element={<config.notFound.element />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
