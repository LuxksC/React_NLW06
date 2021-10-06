// import { FormEvent, useState } from 'react';
// import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
// import { database } from '../services/firebase';

import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  // const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  // const [newQuestion, setNewQuestion] = useState('');
  const { questions, title } = useRoom(roomId);



  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me ask" />
          <div>
          <RoomCode code={roomId}/>
          <Button isOutlined> Close room </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map(questions => {
            return(
              <Question
                key={questions.id}
                content={questions.content}
                author={questions.author}
              />
                
            )
          })}
        </div>
      </main>
    </div>
  )
}