import {createStorefrontClient} from '@shopify/hydrogen-react';

export const client = createStorefrontClient({
  storeDomain: process.env.REACT_APP_PUBLIC_STORE_DOMAIN,
  publicStorefrontToken: process.env.REACT_APP_PUBLIC_STOREFRONT_API_TOKEN,
});