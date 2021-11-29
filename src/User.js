import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const UserContext = React.createContext();

function UserProvider({children}) {
    const [user, setUser] = useState({loggedIn: false, isAdmin: false, sid: "", name: ""});

    const login = (userType, sid, name) => {
        let bool = (userType === 'admin') ? true : false;
        console.log("bool" + bool);

        setUser({
            loggedIn: true,
            isAdmin: bool,
            name: name,
            sid: sid
        });

        console.log(user);
    }

    return <UserContext.Provider value={{user, login}}>{children}</UserContext.Provider>
}

const useUser = () => React.useContext(UserContext);

export {UserProvider, useUser};

