import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseMe from '../components/WhyChooseMe';
import DemoProjects from '../components/DemoProjects';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <main role="main">
      <Hero />
      <Services />
      <DemoProjects />
      <WhyChooseMe />
      <ContactSection />
    </main>
  );
};

export default Home;
