import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext";

export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProductos();
    }, []);

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    );
};

