import React from 'react';
import PageTitle from './PageTitle';
import Login from './Login';
import background from "./imgs/bkg.png";

const LoginPage = () =>
{
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh"
        }}>
            <PageTitle />
            <Login />
        </div>
    );
};

export default LoginPage;
