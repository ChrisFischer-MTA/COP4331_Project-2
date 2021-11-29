import React from 'react/';
import '../styles/styles.css';
import Login from './Login';
import Registration from './Registration';

export default function Home(){
    return (
        <div className="page">
            <Registration/>
            <Login/>
        </div>
        );
}
