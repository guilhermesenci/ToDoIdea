import React from 'react'
import Main from '../template/Main'
import UserLogin from '../template/Login/Login'

export default props =>
  <Main
    icon="home"
    title="Ínicio"
    subtitle="Seguestão de ferramenta ToDo"
  >
    <div className="display-4">Bem vindo</div>
    <hr />
    <p className="mb-0">Sistema desenvolvido para exemplo de ToDo com crud</p>
    <UserLogin />
  </Main>
