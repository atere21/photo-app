import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Gallery from './components/Gallery';
import Signup from './pages/Signup';
import Account from './pages/Account';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;


