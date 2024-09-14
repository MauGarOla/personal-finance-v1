import React from 'react'
import AccountsEditor from '@app/components/AccountsEditor'
import Link from 'next/link'

const Home = () => {
  return (
    <section className="glass p-12 h-full">
        <Link href="/sign-up">Sign Up</Link>
        <h1>Home</h1>
        <AccountsEditor />
    </section>
  )
}

export default Home