import { adminRoutes } from "./adminRoutes";
import sellerRoutes from "./sellerRoute";


export const privateRoutes = [
    ...adminRoutes,
    ...sellerRoutes
]