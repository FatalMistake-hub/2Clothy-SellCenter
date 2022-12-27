/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
    {
        path: '/dashboard', // the url
        icon: 'HomeIcon', // the component being exported from icons/index.js
        name: 'Trang chủ', // name that appear in Sidebar
    },
    {
        path: '/orders',
        icon: 'CartIcon',
        name: 'Quản lý đơn hàng',
    },
    {
        // path: "/categories",
        icon: 'CategoryIcon',
        name: 'Quản lý danh mục',
        path: '/all-categories',

        // routes: [
        //   {
        //     path: "/all-categories",
        //     name: "Tất cả danh mục",
        //   },
        //   // {
        //   //   path: "/add-category",
        //   //   name: "Thêm danh mục",
        //   // },
        // ],
    },
    {
        icon: 'TruckIcon',
        name: 'Quản lý sản phẩm',
        routes: [
            {
                path: '/all-products',
                name: 'Tất cả sản phẩm',
            },
            {
                path: '/add-product',
                name: 'Thêm sản phẩm',
            },
        ],
    },
    {
        path: '/static',
        icon: 'StatIcon',
        name: 'Chỉ số',
    },
    {
        icon: 'Wallet',
        name: 'Tài chính',
        
        path: '/finance',
    },
    // {
    //   path: "/chats",
    //   icon: "ChatIcon",
    //   name: "Chats",
    // },
    {
        path: '/manage-profile',
        icon: 'UserIcon',
        name: 'Hồ sơ shop',
    },
    // {
    //     path: '/settings',
    //     icon: 'OutlineCogIcon',
    //     name: 'Cài đặt',
    //     routes: [
    //         {
    //             path: '/all-products',
    //             name: 'Tất cả sản phẩm',
    //         },
    //         {
    //             path: '/add-product',
    //             name: 'Thêm sản phẩm',
    //         },
    //     ],
    // },
    // {
    //   path: "/logout",
    //   icon: "OutlineLogoutIcon",
    //   name: "Đăng xuất",
    // },
];

export default routes;
