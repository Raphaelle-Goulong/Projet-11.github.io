import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../sass/App.scss';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from './Home'
import Sign from './Sign'
import User from './User'
import { useDispatch } from 'react-redux';
import { checkAuthentication } from '../actions/user.action';
import React, { useEffect } from 'react';
import ProtectedRoutes from '../utils/ProtectedRoutes';




function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthentication()); // Vérifie l'authentification au chargement de l'application
  }, [dispatch]);

  return (
    <BrowserRouter>
            <>
                {/* Utilisation du composant Header */}
                <Header />
                
                {/* Utilisation du composant Routes pour gérer les différentes routes de l'application */}
                <Routes>
                    {/* Définition des routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/Sign" element={<Sign />} />
                    <Route element ={<ProtectedRoutes/>}>
                      <Route path="/User" element={<User />} />
                    </Route>
                </Routes>
                {/* Utilisation du composant Footer */}
                <Footer />
            </>
    </BrowserRouter>
  );
}

export default App;
