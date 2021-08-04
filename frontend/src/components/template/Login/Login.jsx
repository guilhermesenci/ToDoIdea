import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import './Login.css'

function initialState() {
  return { user: '', password: '' };
}

function login() {
  const user = 'admin';
  const password = 'admin';
  if (user === 'admin' && password == 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuario ou senha invalidos' }
}

const UserLogin = () => {
  const [values, setValues] = useState(login);
  const token = useContext(login);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    const token = login(values);
    if (token) {
      return history.push('/users');
    }
    setValues(initialState);
  }

  return (
    <div className="userlogin">
      <h1 className="logintitle">Entrar</h1>
      <form onSubmit={onSubmit}>
        <div className="formcontrol">
          <label htmlFor="user">Usuario:</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
            required
          />
        </div>
        <div className="formcontrol">
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
            required
          />
        </div>
        <button
          type="submit"
          theme="contained-green"
          className="btn btn-primary mt-2"
          rounded
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default UserLogin;