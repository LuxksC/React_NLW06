import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import { database } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss';



export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if(!user){
      await signInWithGoogle();
    }

    history.push('/room/new');
  }


  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') { 
      alert('Please write a valid name')
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exist');
      return;
    }

    history.push(`/room/${roomCode}`)

  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google logo" />
            Create your room with Google
          </button>
          <div className="separator">
            or join a room
          </div>
          <form onSubmit={handleJoinRoom}>
            <input type="text"
            placeholder="Type the room code" 
            onChange={event => setRoomCode(event.target.value)}
            value={roomCode}
            />
            <Button type="submit">
              Join room
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}