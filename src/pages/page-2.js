import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Two</title>
      </Helmet>
      <h1>Page Two</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;