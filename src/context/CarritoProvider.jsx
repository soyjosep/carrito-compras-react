import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CARRITO] Agregar Compra':
            // Verifica si el producto ya está en el carrito
            const productoExistente = state.find(producto => producto.id === action.payload.id);
            if (productoExistente) {
                return state.map(producto =>
                    producto.id === action.payload.id
                        ? { ...producto, cantidad: producto.cantidad + 1 }
                        : producto
                );
            }
            // Si no está, lo agrega con cantidad 1
            return [...state, { ...action.payload, cantidad: 1 }];

        case '[CARRITO] Aumentar Cantidad Compra':
            return state.map(producto =>
                producto.id === action.payload
                    ? { ...producto, cantidad: producto.cantidad + 1 }
                    : producto
            );

        case '[CARRITO] Disminuir Cantidad Compra':
            return state.map(producto =>
                producto.id === action.payload && producto.cantidad > 1
                    ? { ...producto, cantidad: producto.cantidad - 1 }
                    : producto
            );

        case '[CARRITO] Eliminar Compra':
            return state.filter(compra => compra.id !== action.payload);

        default:
            return state;
    }
};

export const CarritoProvider = ({ children }) => {
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompra = (compra) => {
        dispatch({ type: '[CARRITO] Agregar Compra', payload: compra });
    };

    const aumentarCantidad = (id) => {
        dispatch({ type: '[CARRITO] Aumentar Cantidad Compra', payload: id });
    };

    const disminuirCantidad = (id) => {
        dispatch({ type: '[CARRITO] Disminuir Cantidad Compra', payload: id });
    };

    const eliminarCompra = (id) => {
        dispatch({ type: '[CARRITO] Eliminar Compra', payload: id });
    };

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    );
};
