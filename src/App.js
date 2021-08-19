import React, { useState } from 'react';
import "./App.scss";
import Timer from "./Timer.js";
import Fireworks3 from "./Fireworks";

function App() {
const [countdown, setCountdown] = useState(false);
return (
   <div className="container">
      {countdown ? <Fireworks3 /> : null}
      <Timer setCountdown={setCountdown} />
   </div>
 );

}

export default App;