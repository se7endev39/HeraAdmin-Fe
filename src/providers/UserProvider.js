import React, { createContext, useContext,useState } from 'react'

// import useCollection from '../hooks/use-collection.hook'
import { useAuth } from './AuthProvider'

const UserContext = createContext()

export default function UserProvider({ children }) {
  const { user } = useAuth()
  // const { collection, createCollection, deleteCollection } = useCollection(user)
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        // collection,
        // createCollection,
        // deleteCollection,
      }}>

      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}
