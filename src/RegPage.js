import React from 'react';
import PageTitle from './PageTitle';
import Register from './Register';
import background from "./imgs/bkg.png";

const RegPage = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "200vh"
        }}>
            <PageTitle />
            <Register />
        </div>
    );
};

export default RegPage;