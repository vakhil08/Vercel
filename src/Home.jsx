import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      Home <br />
      <Link to={"/login"}>Login</Link><br />
      <Link to={"/insta"}>Insta</Link>
    </div>
  )
}

export default Home
