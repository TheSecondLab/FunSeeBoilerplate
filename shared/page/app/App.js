import React from 'react';
import { object } from 'prop-types';
import { renderRoutes } from 'funsee/utils';

import Layout from '../../components/layout';

const App = ({ route }) => (
  <div>
    <Layout>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes)}
    </Layout>
  </div>
);


App.propTypes = {
  route: object.isRequired
};

App.defaultProps = {
  route: {}
};

export default App;
