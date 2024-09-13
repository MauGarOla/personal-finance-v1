"use client"

import React, { useState } from 'react'

const SignUp = () => {

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleSubmit = async ( e: React.FormEvent ) => {
    e.preventDefault()

    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    })
    setEmail("")
    setName("")
    setPassword("")
  }

  return (
    <section className="sign-in glass bg-pink-100 p-12 rounded-lg h-auto content-center">
      <h1 className='text-6xl text-center mb-10'>Sign Up</h1>
      <form 
        className='flex flex-col h-96 justify-between'
        onSubmit={ handleSubmit }
      >
        <input 
          type="text"
          name="name"
          value={ name }
          className='input' 
          placeholder='Name'
          onChange={ (e) => { setName(e.target.value)} }
          required
        />
        <input 
          type="email"
          name="email"
          value={ email }
          className='input' 
          placeholder='E-mail'
          onChange={ (e) => { setEmail(e.target.value)} }
          required
        />
        <input 
          type="password"
          name="password"
          value={ password }
          className='input' 
          placeholder='Password'
          minLength={8}
          onChange={ (e) => { setPassword(e.target.value)} }
          required
        />
        <p>Password must be at least 8 characters</p>
        <input 
          type="password"
          name="password-confirm"
          className='input' 
          placeholder='Confirm password'
          required
        />
        <button type='submit' className='text-3xl glass bg-pink-500 p-6 w-1/2 mx-auto rounded-xl'>Sign Up</button>
      </form>
    </section>
  )
}

export default SignUp