import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div>
    hellow router
    {renderRoutes(route.routes)}
  </div>
);

export default App;
