//archivo donde vamos a declarar todas las rutas que vamos a tener
//DEPENDENCIES
import {
  Routes,
  Route,
  useLocation, //obtener informacion de la URL donde nos encontramos
  useNavigate, // para poder navegar de manera programatica entre las rutas.
  useParams, //obtener los parametros dinamicos que le estamos indicando a una ruta
} from "react-router-dom";
//PAGES
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import RickAndMorty from "./pages/RickAndMorty";
//Pagina de personajes de rick and morty
import Character from "./pages/Character";
//COMPONENTES
// import Layout from "./components/Layout/Layout";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/routes/ProtectedRoute";
function App() {
  // const navigate = useNavigate();  // avanzado.}
  const location = useLocation();
  const navigate = useNavigate();
  // usando Navigate

  const goToContact = () => {
    navigate("/contact");
  };
  // console.log(location);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} /> //* Marcador universal para
          lo que conocemos de programacion, todo lo que no coincida con //las
          rutas de las paginas me redirecciona a la pagina 404
          <Route path="/product/:name" element={<Product />} />
          <Route path="/rick-and-morty" element={<RickAndMorty />} />
          <Route path="/rick-and-morty/:id" element={<Character />} />
        </Routes>
        <button onClick={goToContact}>Ir a contactos</button>
      </Layout>
    </>
  );
}

export default App;
