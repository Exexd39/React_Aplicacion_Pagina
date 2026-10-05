import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import { Route, Routes } from 'react-router'

import TarjetaProducto from './componentes/TarjetaProducto.jsx'
import { buscarProducto, productos } from './datos/productos.js'

// ETAPA 1 — El problema que React Router viene a resolver.
//
// Esta versión funciona: se puede ver el catálogo y el detalle de un producto.
// Pero toda la aplicación vive en una sola URL. Eso significa que:
//   · no se puede compartir el enlace de un producto,
//   · el botón "atrás" del navegador se sale del sitio,
//   · al recargar (F5) siempre volvemos al catálogo,
//   · no se puede marcar una sección como favorita.
//
// La "navegación" está simulada con una variable de estado.
export default function App() {
  const [vista, setVista] = useState('catalogo')
  const [idSeleccionado, setIdSeleccionado] = useState(null)

  const producto = buscarProducto(idSeleccionado)

  return (
    <div className="d-flex flex-column min-vh-100">
      

      <main className="flex-grow-1 py-4">
        <Container>
          <Alert variant="warning">
            Mira la barra de direcciones mientras navegas: <strong>nunca cambia</strong>.
            Ese es el problema que resolveremos hoy.
          </Alert>
          
        </Container>
      </main>

      
    </div>
  )
}
