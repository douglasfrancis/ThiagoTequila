import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAllProducts } from '../Shopify/Queries/GetAllProducts';
import {flattenConnection} from '@shopify/hydrogen-react';

// Create the context
const ProductContext = createContext();

// Create the provider component
export const ProductGlobalContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoading] = useState(true);
  const [productError, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        const flattened = flattenConnection(productsData.data.products);
        console.log(productsData)
        setProducts(productsData.data.products.edges);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loadingProducts, productError }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for using the ProductContext
export const useProductContext = () => {
  return useContext(ProductContext);
};