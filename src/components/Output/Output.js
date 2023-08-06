import React, {useState} from "react";

export default function Output() {
    const [isShowing, setIsShowing] = useState(false)

    const clickHandler = ()=>{
        setIsShowing(prevState=> !prevState)
    }
  return (
    <React.Fragment>
      <h1>Hello world</h1>
      {isShowing && <p>I am showing</p>}
      <button onClick={clickHandler}>Click me</button>
    </React.Fragment>
  );
}
