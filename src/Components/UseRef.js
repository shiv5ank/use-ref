import { useState, useRef, useEffect } from "react";

const UseRef =(props) => {
  const [timer, setTimer] = useState(0);
  let timerId = useRef(0); 
  let h2Ref = useRef(null); 
  let startButton = useRef(null);
  let stopButton = useRef(null);

  useEffect(() => {
    if (timer === 0) {
      h2Ref.current.innerText = `Timer Value is ${timer}`;
      h2Ref.current.style.color = "black";
    } else {
      h2Ref.current.innerText = `Timer Started and Value is ${timer}`;
      h2Ref.current.style.color = "green";
    }// else {
    //   h2Ref.current.innerText = `Timer is Reset ${0}`;
    //   h2Ref.current.style.color = "black";
    // } 
  });
  const startTimer = () => {
    startButton.current.disabled = true;
    timerId.current = setInterval(() => {
      // id=  dummyid
      //   setTimer(timer + 1); // timer = 0

      setTimer((prevTimer) => prevTimer + 1); 
    }, 1000);
  };

  const stopTimer = () => {
    h2Ref.current.style.color = "red";
    startButton.current.disabled = false;
    clearInterval(timerId.current); 
  };
  const resetTimer = () => {
    h2Ref.current.style.color = "black"
    h2Ref.current.innerText = `Timer reset ${timerId=0}`;
  }

  return (
    <div className="timerid">
      <h2 id="timerid" ref={h2Ref}>
        Timer is {timer}
      </h2>
      <br />
      <button className="start" onClick={startTimer} ref={startButton}>
        Start
      </button>
      &nbsp;&nbsp;&nbsp;
      <button className="stop" onClick={stopTimer} ref={stopButton}>Stop</button>
      &nbsp;&nbsp;&nbsp;
      <button className="reset" onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default UseRef;