import React from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import Footer from '../components/Footer';
import TopDoctors from '../components/TopDoctors';

const Home = () => {
    return (
        <div>
            <Header />
            <SpecialityMenu />
            <TopDoctors />
            <Footer />
        </div>
    );
};

export default Home;
