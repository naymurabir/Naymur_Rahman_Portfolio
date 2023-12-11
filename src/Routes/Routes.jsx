import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/education',
                element: <Education></Education>
            },
            {
                path: '/experience',
                element: <Experience></Experience>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router