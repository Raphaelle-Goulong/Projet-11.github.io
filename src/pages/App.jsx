import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../sass/App.scss';
// import Header from '../components/Header'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from './Home'
import Sign from './Sign'

function App() {
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
                    {/* <Route path="*" element={<Error />} /> */}
                </Routes>
                {/* Utilisation du composant Footer */}
                <Footer />
            </>
    </BrowserRouter>
  );
}

export default App;
