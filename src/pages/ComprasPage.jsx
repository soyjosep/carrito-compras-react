import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {

  const { productos } = useContext(ProductosContext)

  const { agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }
  const handleAumentar = (id) => {
    aumentarCantidad(id)
  }
  const handleDisminuir = (id) => {
    disminuirCantidad(id)
  }

  return (
    <>
      <h1>Compras: </h1>
      <hr />

      {productos.map(producto => (
        <Card
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
          handleAumentar={() => handleAumentar(producto.id)}
          handleDisminuir={() => handleDisminuir(producto.id)}
        >
        </Card>
      ))}
    </>
  )
}
