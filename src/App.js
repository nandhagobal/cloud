import React, { Component } from 'react';
// import logo from './logo.svg';
// import cls from  './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Layout> </Layout></BrowserRouter>
    );
  }
}


export default App;
