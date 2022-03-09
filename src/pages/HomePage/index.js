import React from 'react';
import Categories from '../../component/CategoryList';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';

const HomePage = () => {
    return(
        <>
            <Navbar />
            <Header />
            <Categories />
        </>
    )
}
export default HomePage;