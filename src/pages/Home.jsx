// src/pages/Home.jsx
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Experience from '../components/home/Experience';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </MainLayout>
  );
};

export default Home;