import React from 'react';
import PageTitle from './PageTitle';
import Login from './Login';

const LoginPage = () =>
{
    return (
        <div style={{
            backgroundImage: `url(../imgs/bkn.png)`,
            backgroundSize: "cover",
            height: "100vh"
        }}>
            <PageTitle />
            <Login />
        </div>
    );
};

export default LoginPage;
