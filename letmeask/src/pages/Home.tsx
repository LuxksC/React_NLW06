import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import { TestContext } from '../App'

import '../styles/auth.scss';


export function Home() {
  const history = useHistory();
  const value = useContext(TestContext);

  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result =>  {
      console.log(result);
    });

    history.push('/room/new');
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
          <h1>{value}</h1>
          <img src={logoImg} alt="letmeask logo"/>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google logo" />
            Create your room with Google
          </button>
          <div className="separator">
            or join a room
          </div>
          <form>
            <input type="text"
            placeholder="Type the room code" 
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