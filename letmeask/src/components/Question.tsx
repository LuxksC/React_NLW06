import { ReactNode } from "react"

import classNames from "classnames"

import "../styles/question.scss"

type QuestionProps = {
  content: string;
  author: {
    avatar: string;
    name: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
}

export function Question({
  content,
  author,
  children,
  isHighLighted = false,
  isAnswered = false,
}: QuestionProps) {
  return (
    <div className= {classNames(
      'question',
      {answered: isAnswered},
      {highlighted: isHighLighted && !isAnswered},
    )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>

  )
}