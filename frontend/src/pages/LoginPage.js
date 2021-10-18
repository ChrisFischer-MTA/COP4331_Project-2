import React from 'react';
import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import background from "./img/bkg.png";

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