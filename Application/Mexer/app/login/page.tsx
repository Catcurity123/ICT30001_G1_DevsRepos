import React from 'react'
import Image from 'next/image'
import LoginForm from '@/components/Login/LoginForm'
import {NextUIProvider} from "@nextui-org/react";


const Login = () => {
  return (
    <div className="home-container">
      <div className="login-card">
        <div className="login-image">
          <Image
            src="/assets/images/LoginImage.svg"
            alt="Login Visual"
            width={540}
            height={540}
            priority
          />
        </div>
        <div className="login-form">
          {/* Form content goes here */}
          <div className='login-form-container'>
            <div className='login-form-logo'>
              <Image
                 src="/assets/icons/cropped_logo.svg"
                 alt="Login Visual"
                 width={29}
                 height={25}
              />
              <Image
                 src="/assets/icons/text_logo.svg"
                 alt="Login Visual"
                 width={86}
                 height={19}
              />
            </div>
            <div className='text-bold'>
              <h3>Xin chào from ICT!</h3>
            </div>
            <NextUIProvider>
              <LoginForm />
            </NextUIProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
