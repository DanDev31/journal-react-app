import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ children, isLoggedIn }) => {


  return (
        
       isLoggedIn  ? <Navigate to='/' /> : children
        
    );
};