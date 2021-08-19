import React, { useState, useEffect} from 'react';
import "./App.scss";

function Timer({ setCountdown }) {
   const [seconds, setSeconds] = useState(5);
   const [isRunning, setIsRunning] = useState(false);

   useEffect(() => {
      if (isRunning) {
         const id = window.setInterval(() => {
            setSeconds(seconds => seconds -1)}, 1000);
            return () => window.clearInterval(id);
      }
   }, [isRunning]);

      if (seconds < 0) {
         setSeconds(0);
         setCountdown(true);
         setTimeout(() => {
            setCountdown(false)
         }, 15000);
      }


   return (
      <div className="app">
         <div className='time-circle'>
            <div className="time">
               {seconds}
            </div>
         </div>
         <div className="buttons">
         <button className="play-pause" onClick={() => {
            setIsRunning(true);
         }}>
            <i className="fa fa-play fa-2x" />
         </button>
         <button
            disabled={!isRunning} 
            className="reset" 
            onClick={() => {
               setIsRunning(false);
               setSeconds(5);
               setCountdown(false);
         }}>
              Reset
         </button>
         </div>
      </div>
   )
   }

export default Timer
