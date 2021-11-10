import React from 'react';
import PageTitle from '../PageTitle';
import background from "../imgs/bkg.png";
import admin from './admin';

const RegPage = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "200vh"
        }}>
            <PageTitle />
            <admin/>
        </div>
    );
};

export default RegPage;
