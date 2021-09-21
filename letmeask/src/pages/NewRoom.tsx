import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration from conversation chats"/>
        <strong>Every question has an answer</strong>
        <p>Answer your crowd questions in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask logo"/>
          <h2>Create a new room</h2>
          <form>
            <input type="text"
            placeholder="Room's name" 
            />
            <Button type="submit">
              Create room
            </Button>
          </form>
          <p>Want to join a room?  
          <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}