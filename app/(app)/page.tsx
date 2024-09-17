import React from 'react'
import Link from 'next/link'
import Dashboard from '@components/blocks/Dashboard'

const Home = () => {
  return (
    <section className="glass p-12 h-full">
        <Link href="/sign-up">Sign Up</Link>
        <h1>Home</h1>
        <Dashboard />
    </section>
  )
}

export default Home