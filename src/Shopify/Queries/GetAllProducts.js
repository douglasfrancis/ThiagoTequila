import { gql } from 'graphql-request';
import { client } from '../shopify';

export const GET_ALL_PRODUCTS_QUERY = `
  query {
    products(first: 20) {
      edges {
        node {
          id
          title
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                src
                altText
              }
            }
          }
          variants(first: 5) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`;

export async function getAllProducts() {
    const response = await fetch(client.getStorefrontApiUrl(), {
        body: JSON.stringify({
          query: GET_ALL_PRODUCTS_QUERY,
        }),
        headers: client.getPublicTokenHeaders({ buyerIp: '...' }),
        method: 'POST',
      });
    
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    
      const products = await response.json();
    
      return products;
}