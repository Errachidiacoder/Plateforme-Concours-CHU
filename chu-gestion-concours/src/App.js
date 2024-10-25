import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Hero from './components/Hero';

import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/Admin/main';

import Dashboard from './components/Admin/main';
import Layout from './components/Admin/Layout';


import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dashboard" element={<Dashboard />} />


          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
