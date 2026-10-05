{vista === 'detalle' && producto && (
            <>
              <Button
                variant="outline-secondary"
                className="mb-3"
                onClick={() => setVista('catalogo')}
              >
                Volver
              </Button>
              <h1 className="h3">{producto.nombre}</h1>
              <p>{producto.descripcion}</p>
            </>
          )}