import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children, isLoggedIn }) => {

 
  return (
        
        isLoggedIn ? children : <Navigate to='/auth/login' />
        
    );
};
