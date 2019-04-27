import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';

import img_gatsby from 'assets/images/gatsby-astronaut.png';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1>Gatsby Sass Starter</h1>
      <p className="gatsby-astronaut">
        <img src={img_gatsby} alt="Build with Gatsby!" />
      </p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
