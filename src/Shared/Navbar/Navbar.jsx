import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
        <NavLink to="/" className="text-lg font-semibold mr-4"> Home </NavLink>

        <NavLink to="/education" className="text-lg font-semibold mr-4"> Education </NavLink>

        <NavLink to="/experience" className="text-lg font-semibold mr-4"> Experience </NavLink>

        <NavLink to="/projects" className="text-lg font-semibold mr-4"> Projects </NavLink>

        <NavLink to="/contact" className="text-lg font-semibold mr-4"> Contact </NavLink>

        <NavLink to="/blog" className="text-lg font-semibold"> Blog </NavLink>
    </>

    return (
        <div className="navbar fixed z-10 max-w-screen-2xl bg-[#191924] md:text-white md:px-10 md:py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-white"> Naymur<span className="text-[#854CE6]">Rahman</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="text-white border-2 border-purple-600 font-bold py-2 px-3 rounded-xl hover:bg-[#854CE6] ">Github Profile</button>
            </div>
        </div>
    );
};

export default Navbar;