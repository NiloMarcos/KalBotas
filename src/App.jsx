import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Home } from './pages/Home';

import './App.css';

export function App() {
  useEffect(() => {
    AOS.init();
  },[]);

  return <Home />
}
