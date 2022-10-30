import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));

const Orders = lazy(() => import("../pages/Order/Orders"));
const DetailOrders = lazy(() => import("../pages/Order/DetailOrder"));

const CategoryAll = lazy(() => import("../pages/Category/CategoryAll"));

const ProductsAll = lazy(() => import("../pages/Product/ProductsAll"));
const SingleProduct = lazy(() => import("../pages/Product/SingleProduct"));
const UpdateProduct = lazy(() => import("../pages/Product/UpdateProduct"));
const AddProduct = lazy(() => import("../pages/Product/AddProduct"));

const Customers = lazy(() => import("../pages/Profile/Customers"));
const Chats = lazy(() => import("../pages/Profile/Chats"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Settings = lazy(() => import("../pages/Profile/Settings"));

const Page404 = lazy(() => import("../pages/OtherPage/404"));
const Blank = lazy(() => import("../pages/OtherPage/Blank"));


const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/orders/:id",
    component: DetailOrders,
  },
  {
    path: "/all-products",
    component: ProductsAll,
  },
  {
    path: "/add-product",
    component: AddProduct,
  },
  {
    path: "/all-categories",
    component: CategoryAll,
  },
  {
    path: "/add-product",
    component: AddProduct,
  },
  {
    path: "/product/:id",
    component: SingleProduct,
  },
  {
    path: "/product/update/:id",
    component: UpdateProduct,
  },
  
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/chats",
    component: Chats,
  },
  {
    path: "/manage-profile",
    component: Profile,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
