import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-screen'>
      { children }
    </main>
  )
}

export default AppLayout