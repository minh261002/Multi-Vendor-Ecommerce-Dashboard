import { lazy } from "react";
const Home = lazy(() => import("../../views/pages/Home"));

const sellerRoutes = [
    {
        path: '/',
        element: <Home />,
        ability: ['seller', 'admin']
    },
];

export default sellerRoutes;