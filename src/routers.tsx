import { createBrowserRouter } from "react-router";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import BlogLayout from "./pages/blog/BlogLayout";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blog/BlogDetails";
import ProductLayout from "./pages/product/ProductLayout";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/product/ProductDetail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "blogs",
        Component: BlogLayout,
        children: [
          { index: true, Component: Blog },
          { path: ":postId", Component: BlogDetails },
        ],
      },
      {
        path: "products",
        Component: ProductLayout,
        children: [
          { index: true, Component: Product },
          { path: ":productId", Component: ProductDetail },
        ],
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
