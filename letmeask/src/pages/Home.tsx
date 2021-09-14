import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss';

export function Home() {
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
          <button className="create-room">
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
            <button type="submit">
              Join room
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}