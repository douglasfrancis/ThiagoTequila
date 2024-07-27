import React, { useEffect, useState, useRef } from 'react';
import { useProductContext } from '../../../Context/ProductContext';
import ProductHero from './ProductHero';
import ProductNav from './ProductNav';
import { useLocation, useSearchParams } from 'react-router-dom';
import UseVanilla from './UseVanilla';
import UseCoffee from './UseCoffee';
import UseCherry from './UseCherry';
import UseTamarindo from './UseTamarindo';

// Product IDs
const vanillaId = "gid://shopify/Product/8297723035938";
const cherryId = "gid://shopify/Product/8297724346658";
const tamarindoId = "gid://shopify/Product/8297726181666";
const coffeeId = "gid://shopify/Product/9407113101602";

const ProductList = () => {
  const { products } = useProductContext(); // Fetch your products from context
  const { state } = useLocation();
  console.log(state);

  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState(searchParams.get('product') || (state?.selection) || 'Vanilla');
  const [productData, setProductData] = useState(null);
  const [userTriggeredScroll, setUserTriggeredScroll] = useState(false); // Track user-triggered scroll

  // Refs for each product component
  const vanillaRef = useRef(null);
  const coffeeRef = useRef(null);
  const cherryRef = useRef(null);
  const tamarindoRef = useRef(null);

  // Update URL query parameter whenever product changes
  useEffect(() => {
    if (products && products.length > 0) {
      const selectedProduct = product || products[0]?.node?.title;
      setSearchParams({ product: selectedProduct });

      const selection = products.find((item) => item.node.title === selectedProduct);

      if (!selection) {
        setProductData(products[0]);
      } else {
        setProductData(selection);
      }
    }
  }, [product, products, setSearchParams]);

  useEffect(() => {
    if (products && products.length > 0 && !product) {
      setProduct(products[0]?.node?.title);
    }
  }, [products]);

  // Handle state from useLocation
  useEffect(() => {
    if (state?.selection && products && products.length > 0) {
      const selection = products.find((item) => item.node.title === state.selection);
      if (selection) {
        setProduct(state.selection);
        setSearchParams({ product: state.selection });
        setProductData(selection);
        setUserTriggeredScroll(true); // Mark as user-triggered scroll
      }
    }
  }, [state, products, setSearchParams]);

  // Scroll to the selected product only if it's user-triggered
  useEffect(() => {
    if (userTriggeredScroll) {
      if (productData?.node?.id === vanillaId) {
        vanillaRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (productData?.node?.id === coffeeId) {
        coffeeRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (productData?.node?.id === cherryId) {
        cherryRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (productData?.node?.id === tamarindoId) {
        tamarindoRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
      setUserTriggeredScroll(false); // Reset user-triggered scroll
    }
  }, [productData, userTriggeredScroll]);

  return (
    <div>
      <ProductHero />
      <ProductNav setProduct={(selectedProduct) => {
        setProduct(selectedProduct);
        setUserTriggeredScroll(true); // Mark as user-triggered scroll
      }} />

      <div ref={vanillaRef}>
        {productData?.node?.id === vanillaId && <UseVanilla data={productData} />}
      </div>
      <div ref={coffeeRef}>
        {productData?.node?.id === coffeeId && <UseCoffee data={productData} />}
      </div>
      <div ref={cherryRef}>
        {productData?.node?.id === cherryId && <UseCherry data={productData} />}
      </div>
      <div ref={tamarindoRef}>
        {productData?.node?.id === tamarindoId && <UseTamarindo data={productData} />}
    </div>
    </div>
  );
};

export default ProductList;