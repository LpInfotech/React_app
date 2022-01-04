import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={
              <div style={{ padding: "1rem" }}>
                <h1>There's nothing here!</h1>
              </div>
            }>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    )
  }
}

