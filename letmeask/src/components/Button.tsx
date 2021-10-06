import { ButtonHTMLAttributes } from 'react' // import button HTML attributes to be used in React

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {isOutlined?: boolean}; // Define ButtonProps as all the attributes that can be assigned to a button element in HTML and add a property called isOutlined used to identify if it is a outlined button



export function Button({isOutlined = false, ...props}: ButtonProps) { 
  return(
    <button className={`button ${isOutlined ? 'outline' : ''}`} {...props}/>
  )
}