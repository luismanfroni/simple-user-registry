import React, { useState, useContext } from 'react';

async function sha256(message) {
    const msgBuffer = new TextEncoder('utf-8').encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
}

const usersData = [
  {id: 1, firstName: 'Carlos', lastName: 'Eduardo', username: 'cado', email: 'cado@fake.com', phone: '', mobile: '751362089378839', password: '06394af259db19355ccf0b668c77ec0fdd9b8d5aa388d848e1bb5959e80e2a24', expire: true, expireDate: '2021-04-05', status: 'Active', profile: 2, company: 1 },
  {id: 2, firstName: 'Ronaldo', lastName: 'Smith', username: 'romi', email: 'romi@fake.com', phone: '', mobile: '751362089378839', password: '06394af259db19355ccf0b668c77ec0fdd9b8d5aa388d848e1bb5959e80e2a24', expire: false, expireDate: '2021-05-11', status: 'Inactive', profile: 3, company: 1 },
  {id: 3, firstName: 'Tiago', lastName: 'Porto', username: 'rafa', email: 'rafa@fake.com', phone: '', mobile: '751362089378839', password: '06394af259db19355ccf0b668c77ec0fdd9b8d5aa388d848e1bb5959e80e2a24', expire: true, expireDate: '2022-01-25', status: 'Active', profile: 1, company: 3 },
  {id: 4, firstName: 'Fernando', lastName: 'Mateus', username: 'fer', email: 'fer@fake.com', phone: '', mobile: '751362089378839', password: '06394af259db19355ccf0b668c77ec0fdd9b8d5aa388d848e1bb5959e80e2a24', expire: true, expireDate: '2021-07-25', status: 'Active', profile: 1, company: 2 },
  {id: 5, firstName: 'Gustavo', lastName: 'Imba', username: 'gus', email: 'gus@fake.com', phone: '', mobile: '751362089378839', password: '06394af259db19355ccf0b668c77ec0fdd9b8d5aa388d848e1bb5959e80e2a24', expire: true, expireDate: '2021-05-22', status: 'Inactive', profile: 2, company: 3 },
  {id: 6, firstName: 'Pedro', lastName: 'Leman', username: 'pedro', email: 'pedro@fake.com', phone: '', mobile: '751362089378839', password: '06394af259db19355ccf0b668c77ec0fdd9b8d5aa388d848e1bb5959e80e2a24', expire: true, expireDate: '2021-06-23', status: 'Active', profile: 3, company: 2 },
  {id: 7, firstName: 'Mario', lastName: 'Renato', username: 'mario', email: 'mario@fake.com', phone: '', mobile: '751362089378839', password: '06394af259db19355ccf0b668c77ec0fdd9b8d5aa388d848e1bb5959e80e2a24', expire: false, expireDate: '2022-02-25', status: 'Active', profile: 1, company: 1 },
  {id: 8, firstName: 'Eduardo', lastName: 'Faria', username: 'edu', email: 'edu@fake.com', phone: '', mobile: '751362089378839', password: '06394af259db19355ccf0b668c77ec0fdd9b8d5aa388d848e1bb5959e80e2a24', expire: true, expireDate: '2021-05-09', status: 'Active', profile: 3, company: 3 },
  {id: 9, firstName: 'Kalico', lastName: 'Albano', username: 'kali', email: 'kali@fake.com', phone: '', mobile: '751362089378839', password: '06394af259db19355ccf0b668c77ec0fdd9b8d5aa388d848e1bb5959e80e2a24', expire: true, expireDate: '2021-04-15', status: 'Inactive', profile: 2, company: 2 }
]

const UsersContext = React.createContext([usersData, () => {}]);
export const UsersContextProvider = ({children, value = usersData}) => {
    const usersHook = useState(value);
    return <UsersContext.Provider value={usersHook}>{children}</UsersContext.Provider>
}
export const useUsersHook = () => {
    const [users, setUsers] = useContext(UsersContext);
    function getUser(id) {
        return users.find(user => user.id === id);
    }
    function setUser(userValue) {
        const hashedPassword = sha256(userValue.password);
        setUsers(users.map(user => {
            if (user.id === userValue.id) 
                return {...userValue, password: hashedPassword};
            else 
                return user;
        }));
    }
    function removeUser(id) {
        setUsers(users.filter(user => user.id !== id));
    }
    return {
        users, getUser, setUser, removeUser
    }
}


export const profileData = [
    { id: 1, name: "Driver" },
    { id: 2, name: "Office" },
    { id: 3, name: "Owner" }
]
export const companyData = [
    { id: 1, name: "Nolan LLC" },
    { id: 2, name: "Padberg, Labadie and McDermott" },
    { id: 3, name: "Jacobs, Haag and Stanton" }
]