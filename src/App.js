import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from './pages/Cart'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { productsData } from "./api/Api";
import Product from "./components/Product";
import Pages from "./pages/Pages";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      }, {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/pages",
        element: <Pages/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;