import React, { createContext, useState } from 'react';
export const UserContext = createContext()
const index = ({children}) => {
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState([]);
  return (
    <UserContext.Provider value={[user, setUser, userId, setUserId]}>
      {children}
    </UserContext.Provider>
  );
};

export default index;