import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button';

import { database } from '../services/firebase';

import '../styles/auth.scss';



export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') { // function trim removes the spaces on the left and right of the string
      alert('Please write a valid name')
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/room/${firebaseRoom.key}`) //firebase.Room.key = Id created by firebase to reference the object created in the room reference
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
          <h2>Create a new room</h2>
          <form onSubmit={handleCreateRoom}>
            <input type="text"
            placeholder="Room's name" 
            onChange={event => setNewRoom(event.target.value)}
            value={newRoom}
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