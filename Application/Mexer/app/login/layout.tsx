import '../../styles/globals.css'
import type { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'MEXER',
  description: 'Do Sports with Joy & Convenience',
  icons: {
    icon: '/assets/icons/cropped_logo.svg'
  }
}


const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
  <html lang='en'>
    <body>
      <div className='main' />

      <main className='app'>
        {children}
      </main>
    </body>
  </html>
  )
}

export default RootLayout
