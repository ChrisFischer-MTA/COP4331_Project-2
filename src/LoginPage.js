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
            height: "100vh",
            width: "200vh"
        }}>
            <Login />
        </div>
    );
};

export default LoginPage;
