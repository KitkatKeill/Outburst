import { Fireworks } from 'fireworks/lib/react';

function Fireworks3() {
  let fxProps = {
    count: 3,
    interval: 300,
    colors: ['#EFD956', '#9E8A17', '#4A4008'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 300 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }

  return (
    <div>
      <Fireworks {...fxProps} />
    </div>
  )
}

export default Fireworks3