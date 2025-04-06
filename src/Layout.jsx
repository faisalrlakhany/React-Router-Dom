

import { Outlet } from "react-router-dom"
import Navbar from "./components/Links/Navbar"
import Footer from "./components/Links/Footer"

const Layout = ()=>{


    return(

        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>



    )


}

export default Layout