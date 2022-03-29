import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </>  
    );
};

export default Layout;