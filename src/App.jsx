import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/products/:productId", element: <ProductDetails /> },
    { path: "/about", element: <About /> },
  ]);
  return <RouterProvider router={router} />;
}
