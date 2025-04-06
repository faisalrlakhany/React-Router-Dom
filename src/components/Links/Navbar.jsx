import { Link } from "react-router-dom"



const Navbar = () => {

    return (

        <>
<div className="navbar bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden border-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-box z-10 mt-3 w-52 p-2 shadow text-black font-medium"
      >
        <li><Link to='/' className="hover:text-gray-800 transition-colors">Home</Link></li>
        <li><Link to='about' className="hover:text-gray-800 transition-colors">About</Link></li>
        <li><Link to='service' className="hover:text-gray-800 transition-colors">Services</Link></li>
        <li><Link to='contact' className="hover:text-gray-800 transition-colors">Contact</Link></li>
      </ul>
    </div>
    <span className="text-2xl font-bold text-black ml-2">React-Router-Dom</span>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2">
      <li><Link to='/' className="text-lg font-semibold text-black hover:text-gray-800 transition-colors">Home</Link></li>
      <li><Link to='about' className="text-lg font-semibold text-black hover:text-gray-800 transition-colors">About</Link></li>
      <li><Link to='service' className="text-lg font-semibold text-black hover:text-gray-800 transition-colors">Services</Link></li>
      <li><Link to='contact' className="text-lg font-semibold text-black hover:text-gray-800 transition-colors">Contact</Link></li>
    </ul>
  </div>

  <div className="navbar-end">
    <a className="btn bg-gray-800 text-white hover:bg-gray-700 font-semibold transition-all duration-300 border-none">
      Login
    </a>
  </div>
</div>



        </>




    )



}


export default Navbar