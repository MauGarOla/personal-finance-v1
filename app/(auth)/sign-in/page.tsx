import React from 'react'

type Props = {}

const SignIn = () => {
  return (
    <section className="sign-in glass bg-pink-100 p-12 rounded-lg h-auto content-center">
      <h1 className='text-6xl text-center mb-10'>Sign In</h1>
      <form className='flex flex-col h-96 justify-between' >
        <input type="email" name="email" id="email" className='input' placeholder='E-mail'/>
        <input type="password" name="password" id="password" className='input' placeholder='Password'/>
        <button type='submit' className='text-3xl glass bg-pink-500 p-6 w-1/2 mx-auto rounded-xl'>Sign In</button>
      </form>
    </section>
  )
}

export default SignIn