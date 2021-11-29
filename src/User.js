import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const UserContext = React.createContext();

function UserProvider({children}) {
    const [user, setUser] = useState({loggedIn: false, isAdmin: false, sid: "", name: ""});

    const login = (userType, sid, name) => {
        setUser({
            loggedIn: true,
            isAdmin: userType === 'admin' ? true : false,
            name: name,
            sid: sid
        });
    }

    return <UserContext.Provider value={{user, login}}>{children}</UserContext.Provider>
}

const useUser = () => React.useContext(UserContext);

export {UserProvider, useUser};

