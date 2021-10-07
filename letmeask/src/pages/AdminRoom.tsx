// import { FormEvent, useState } from 'react';
// import toast from 'react-hot-toast';
import { useParams, useHistory } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

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
  const history = useHistory();

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Do you really want to delete this question?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/')
  }

  async function handleCheckQuestionAsAnswered (questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighLighted: true,
    })
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me ask" />
          <div>
          <RoomCode code={roomId}/>
          <Button 
          isOutlined
          onClick = {handleEndRoom}
          > Close room </Button>
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
                isAnswered={questions.isAnswered}
                isHighLighted={questions.isHighLighted}
              >

                {!questions.isAnswered && (
                <>
                  <button 
                  type="button"
                  aria-label="Set question as answered"
                  onClick={() => handleCheckQuestionAsAnswered(questions.id
                    )}
                >
                  <img src={checkImg} alt="Highlight question icon" />
                </button>

                <button 
                  type="button"
                  aria-label="Highlight question"
                  onClick={() => handleHighlightQuestion(questions.id
                    )}
                >
                  <img src={answerImg} alt="Answered question box" />
                </button>
              </>)}
                

                <button 
                  type="button"
                  aria-label="Remove question"
                  onClick={() => handleDeleteQuestion(questions.id
                    )}
                >
                  <img src={deleteImg} alt="Remove question icon" />
                </button>
              </Question>
                
            )
          })}
        </div>
      </main>
    </div>
  )
}