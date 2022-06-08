// Rutas protegidas, para determinar quien puede entrar o quien no
import { useNavigate, Route } from "react-router-dom"; //importamos Route para crear nuestra propia tipo de ruta
import { Navigate, useLocation } from "react-router-dom";
//useNavigate me sirve para redireccionar al usuario que no posee ciertos permisos para mantenerse en la pagina misma.

// const ProtectedRoute = ({ element: Element, ...props }) => {
//   //props que tiene esta rita, de manera dinamica, cuando lo ponemos de param toma otro sentido.
//   return (
//     //todas las props que le pasemos al protected Route se van a copiar en el <Route/>
//     <Route {...props} element={<Element />} />
//   );
// };

// export default ProtectedRoute;

//COMPONENTES CON MAYUSCULAS, PROPS CON MINUSCULAS HERMANOOOOOOOO!!!

const ProtectedRoute = ({ children }) => {
  const isAdmin = true; // si esto cambia a false, soy redirigido directamente al Home
  // const navigate = useNavigate();
  const location = useLocation();
  if (!isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
