{vista === 'catalogo' && (
            <>
              <h1 className="h3 mb-3">Catálogo</h1>
              <Row xs={1} sm={2} lg={3} className="g-3">
                {productos.map((item) => (
                  <Col key={item.id}>
                    <TarjetaProducto
                      producto={item}
                      onVerDetalle={() => {
                        setIdSeleccionado(item.id)
                        setVista('detalle')
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </>
          )}