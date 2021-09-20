import { ButtonHTMLAttributes } from 'react' // import button HTML attributes to be used in React

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; // Define ButtonProps as all the attributes that can be assigned to a button element in HTML



export function Button(props: ButtonProps) { 
  return(
    <button className="button" {...props}/>
  )
}