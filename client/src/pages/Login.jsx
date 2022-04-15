import React, { useContext } from 'react';
import Mybutton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  console.log(isAuth);
  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Логинся, пупс</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин"></MyInput>
        <MyInput type="password" placeholder="Пароль?"></MyInput>
        <Mybutton>Войти</Mybutton>
      </form>
    </div>
  );
}

export default Login;
