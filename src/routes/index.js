import Home from "../pages/Home";
import About from "../pages/Pages";
import Blog from "../pages/Blog";
import Categories from "../pages/Categories";
import Pages from "../pages/Pages";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/blog", component: About },
    { path: "/categories", component: Blog },
    { path: "/contact", component: Categories },
    { path: "/pages", component: Pages },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
