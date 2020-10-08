import React, { createContext } from 'react';

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {

  return (
    <UsuarioContext.Provider value={
      {
        nome: "Antonio Podgorski",
        email: "antonio@podgorski.com.br"
      }
    }>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioContext, UsuarioProvider }