import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// dev-fy10axpewuctpttu.us.auth0.com
// mZYArFL9xN5NxXEuLDVkvTbeW3JXIa2r
// A1lX8ptNwjZrBwhEg3YmQlhtTj28qxArhBRrrauJXce-ntlkNFsa4Netc6Dh1ZB4

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMIN}
    clientId={process.env.REACT_APP_AUTH_CLINT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
