import React from 'react/';
import '../styles/styles.css';
import Registration from './Registration';
import AddTeam from './AddTeam';

export default function Home(){
    return (
        <div className="page">
            <Registration/>
            <AddTeam />
        </div>
    );
}
