/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Trang chủ", // name that appear in Sidebar
  },
  {
    path: "/app/orders",
    icon: "CartIcon",
    name: "Quản lý đơn hàng",
  },
  {
    // path: "/app/categories",
    icon: "CategoryIcon",
    name: "Quản lý danh mục",
    path: "/app/all-categories",

    // routes: [
    //   {
    //     path: "/app/all-categories",
    //     name: "Tất cả danh mục",
    //   },
    //   // {
    //   //   path: "/app/add-category",
    //   //   name: "Thêm danh mục",
    //   // },
    // ],
  },
  {
    icon: "TruckIcon",
    name: "Quản lý sản phẩm",
    routes: [
      {
        path: "/app/all-products",
        name: "Tất cả sản phẩm",
      },
      {
        path: "/app/add-product",
        name: "Thêm sản phẩm",
      },
    ],
  },
  {
    path: "/app/customers",
    icon: "StatIcon",
    name: "Chỉ số",
  },
  {
    path: "/app/finance",
    icon: "Finance",
    name: "Tài chính",
  },
  // {
  //   path: "/app/chats",
  //   icon: "ChatIcon",
  //   name: "Chats",
  // },
  {
    path: "/app/manage-profile",
    icon: "UserIcon",
    name: "Hồ sơ shop",
  },
  {
    path: "/app/settings",
    icon: "OutlineCogIcon",
    name: "Cài đặt",
    routes: [
      {
        path: "/app/all-products",
        name: "Tất cả sản phẩm",
      },
      {
        path: "/app/add-product",
        name: "Thêm sản phẩm",
      },
    ],
  },
  // {
  //   path: "/app/logout",
  //   icon: "OutlineLogoutIcon",
  //   name: "Đăng xuất",
  // },
];

export default routes;
