import React from 'react';
import PageTitle from '../components/PageTitle';
import Register from '../components/Register';
import background from "./img/bkg.png";

const RegPage = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh"
        }}>
            <PageTitle />
            <Register />
        </div>
    );
};

export default RegPage;