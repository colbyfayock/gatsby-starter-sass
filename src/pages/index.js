import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import img_gatsby from 'assets/images/gatsby-astronaut.png';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <p className="gatsby-astronaut">
          <img src={img_gatsby} alt="Build with Gatsby!" />
        </p>
        <h1>Gatsby Sass Starter</h1>
        <p>
          Welcome to your new Gatsby site.
        </p>
        <p>
          Now go build something great.
        </p>
        <h2>Still Getting Started?</h2>
        <p>
          Run the following in your terminal!
        </p>
        <pre>
          <code>
            gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-sass
          </code>
        </pre>
      </Container>
    </Layout>
  );
};

export default IndexPage;
