"use client"
import Header from './Header'
import "./page.css";
import Sidebar from './Sidebar'
import Feed from './Feed'
import Sign from './Sign'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

export default function Home() {

  const [user] = useAuthState(auth)

  return (
    <main>  
      {user ?       
        <div>
        <Header />
        <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
      </div> :
      <Sign />}
     
    </main>
  )
}
