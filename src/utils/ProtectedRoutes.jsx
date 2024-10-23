import {  Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

// const ProtectedRoutes = ({children}) => {
//     // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
//     // // const user = true
//     // // return user ? <Outlet/> : <Navigate to ="/Home"/>
//     // if (!isAuthenticated) {
//     //     return <Navigate to="/Home" replace />;
//     // }

//     // return children;
   




// }
 const ProtectedRoutes = ({ children }) => {
        const { isAuthenticated, loading } = useSelector((state) => state.user);
      
        if (loading) {
          return <div>Loading...</div>; // Afficher un écran de chargement pendant la vérification
        }
      
        if (!isAuthenticated) {
          return <Navigate to="/Home" replace />;
        }
      
        return children || <Outlet />;
      };

export default ProtectedRoutes