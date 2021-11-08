import React from 'react';
import PageTitle from '../PageTitle';
import adminPage from '../adminPage';
import background from "../imgs/bkg.png";

const RegPage = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "200vh"
        }}>
            <PageTitle />
            <adminPage />
        </div>
    );
};

export default RegPage;
