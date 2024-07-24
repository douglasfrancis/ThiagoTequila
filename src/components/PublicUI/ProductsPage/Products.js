import React, { useEffect, useState } from 'react';
import { CartProvider, useCart, ProductProvider, useProduct } from '@shopify/hydrogen-react';
import { useProductContext } from '../../../Context/ProductContext'
import ProductHero from './ProductHero';
import ProductNav from './ProductNav';
import { useSearchParams } from 'react-router-dom';
import UseVanilla from './UseVanilla'
import UseCoffee from './UseCoffee';
import UseCherry from './UseCherry';
import UseTamarindo from './UseTamarindo';

//Product IDs
let vanillaId = "gid://shopify/Product/8297723035938"
let cherryId = "gid://shopify/Product/8297724346658"
let tamarindoId = "gid://shopify/Product/8297726181666"
let coffeeId = "gid://shopify/Product/9407113101602"


// Main component where CartProvider is placed at a higher level
const ProductList = () => {

  const { products } = useProductContext(); // Fetch your products from context

    // Filters
    const [searchParams, setSearchParams] = useSearchParams();
    const [product, setProduct] = useState(searchParams.get('product') || products[0]?.node?.title);
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true)
  
      // Update URL query parameter whenever category changes
      useEffect(() => {
        setSearchParams({ product: product });
        
        let selection =  products.find((item) => item.node.title === product)

        if(!selection){
          setProductData(products[0])
        } else {
          setProductData(selection)
        }

      }, [product, setSearchParams]);
 

  return (
    
      <div >
        <ProductHero />
        <ProductNav setProduct={setProduct}/>

        {productData?.node?.id === vanillaId && <UseVanilla data={productData}/>}
        {productData?.node?.id === coffeeId && <UseCoffee data={productData}/>}
        {productData?.node?.id === cherryId && <UseCherry data={productData}/>}
        {productData?.node?.id === tamarindoId && <UseTamarindo data={productData}/>}


        {/*products.map((product, i) => (
          <div key={i}>
            <ProductProvider data={product}>
              <UsingProduct />
            </ProductProvider>
          </div>
        ))*/}
      </div>
  );
};

export default ProductList;



// Button to add products to the cart
function AddToCartButton({ merchandiseId }) {
  const { linesAdd } = useCart();

  const handleAddToCart = async () => {
    try {
      await linesAdd([{ merchandiseId, quantity: 1 }]);
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
}

// Component to display individual product and provide add-to-cart functionality
function UsingProduct() {
  const { product } = useProduct();

  return (
    <>
      <h1>{product?.node.title}</h1>
     
        <AddToCartButton key={product.node.id} merchandiseId={product.node.variants.edges[0].node.id} />
  
    </>
  );
}