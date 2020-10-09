import React, { createContext, useState } from 'react';

import api from '../services/api';

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    // console.warn('cheguei aqui')
    const response = await api.get('usuarios');


    const user = response.data.find((usuario) => {
      return email === usuario.email && password === usuario.password
    })


    if (user !== undefined) {

      setUser(user)
    }

  }

  const signOut = () => {
    setUser(null)
  }


  return (
    <UsuarioContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioContext, UsuarioProvider }