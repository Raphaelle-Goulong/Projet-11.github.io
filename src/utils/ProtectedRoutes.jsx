import {  Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';



 const ProtectedRoutes = ({ children }) => {
        const { isAuthenticated, loading } = useSelector((state) => state.user);
      
        if (loading) {
          return <div>Loading...</div>; // Afficher un écran de chargement pendant la vérification
        }
      
        if (!isAuthenticated) {
          return <Navigate to="/Sign" replace />;
        }
      
        return children || <Outlet />;
      };

export default ProtectedRoutes