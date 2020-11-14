import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Display from './Components/Display';
import Display2 from './Components/Display2';
import SubFooter from './Components/SubFooter';
import Container from './Components/Container';
import Container2 from './Components/Container2';
import Card from './Components/Card';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Display />
    <Container title="More on cooling pad" />
    <Container2 title="Fresh Recommendations" />
    <Display2 />
    <SubFooter />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
