import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';

export default class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Header title="Reac App" />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
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

