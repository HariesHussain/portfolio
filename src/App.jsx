import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import SEOHead from './components/SEOHead';

const App = () => {
  return (
    <Layout>
      <SEOHead />
      <Home />
    </Layout>
  );
};

export default App;
