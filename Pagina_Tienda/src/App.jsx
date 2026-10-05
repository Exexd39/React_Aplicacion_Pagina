import { Routes, Ro, Route } from "react-router";
import Layout from './componentes/Layout.jsx';
import Inicio from './paginas/Inicio.jsx';
import Catalogo from './paginas/Catalogo.jsx';
import Nosotros from './paginas/Nosotros.jsx';
import DetalleProducto from './paginas/DetalleProducto.jsx';

// Aca van las rutas
export default function App(){
    return(
        <Routes> 
            // ruta padre
            <Route path="/" element={<Layout />} />
            
            // lo del index es porque si es /, mostrara el index por default
            <Route index element={<Inicio />} />   
            <Route path="catalogo" element={<Catalogo />} />    


        </Routes>
    );
}