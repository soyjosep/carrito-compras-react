import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);

    // Función para calcular el total
    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
    };

    const handleImpresion = () => {
        print()
        if (listaCompras.length === 0) {
            alert("El carrito está vacío");
            return;
        }
        // Lógica de compra
        alert("Compra realizada con éxito");

    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCompras.map(item => (
                        <tr key={item.id}>
                            <th>{item.title}</th>
                            <td>${item.price}</td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <button
                                        type="button"
                                        className="btn btn-success btn-sm me-2"
                                        onClick={() => aumentarCantidad(item.id)}
                                    >+</button>
                                    <span>{item.cantidad}</span>
                                    <button
                                        type="button"
                                        className="btn btn-warning btn-sm ms-2"
                                        onClick={() => disminuirCantidad(item.id)}
                                    >-</button>
                                </div>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => eliminarCompra(item.id)}
                                >Eliminar</button>
                            </td>
                        </tr>
                    ))}

                    {/* Fila para el total */}
                    <tr>
                        <th><b>TOTAL:</b></th>
                        <td></td>
                        <td></td>
                        <td>${calcularTotal()}</td>
                    </tr>
                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button
                    className="btn btn-primary"
                    onClick={handleImpresion}
                    disabled={listaCompras<1}
                >
                    COMPRAR
                </button>
            </div>
        </>
    );
};
