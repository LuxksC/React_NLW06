//File destinated to some testes with the button component

import { useState } from "react" // aloows the use off ComponentStates in the file

export function Button() { //create component Button and export to use in "App.tsx"
  const [counter, setCounter] = useState(0) // create state counter with initial value 0
  //React just understand changes in a variable if it is a state.

  function increment() { // function to increment the value off counter
    setCounter(counter + 1) //function that allows to change a state value. Canges counter to counter+1.
  }
  console.log(counter)
  return(
    <button onClick={increment}/*atribute from button that calls an action on click*/ >{counter}</button> //create button and calls the function increment when button click
  )
}