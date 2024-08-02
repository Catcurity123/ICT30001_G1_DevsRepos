"use client"

import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import {login} from "@/app/auth/action";
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<{ username: string; password: string}>({ username: '', password: ''});
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (error.username) setError({ ...error, username: '' });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error.password) setError({ ...error, password: '' });
  };

  const formAction = async (event: any) => {
    event.preventDefault();
    const loginResponse = await login(username, password);
    if (loginResponse === 201) {
      router.push('/home');
    } else {
      if (typeof loginResponse === 'string') {
        setError({ username: loginResponse, password: ''});
      }
    }
  };

  return (
    <form className="flex flex-col" onSubmit={formAction} noValidate>
      <div className="login-input">
        <label>Tên đăng nhập</label>
        <Input
          label="Nhập tên đăng nhập..."
          type="text"
          value={username}
          required={true}
          onChange={handleUsernameChange}
          isInvalid={!!error.username}
          errorMessage={error.username}
        />
      </div>
      <div className="login-input">
        <label>Mật khẩu</label>
        <Input
          label="Nhập mật khẩu..."
          type={isVisible ? "text" : "password"}
          value={password}
          required={true}
          onChange={handlePasswordChange}
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          isInvalid={!!error.password}
          errorMessage={error.password}
        />
      </div>
      <Button type="submit" className='login-button'>Đăng nhập</Button>
    </form>
  );
};

export default LoginForm;
