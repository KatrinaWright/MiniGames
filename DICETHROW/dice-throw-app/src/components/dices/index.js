import React, { useState, useRef } from 'react';

import './index.css';

function Dices() {
    const [result, setResult] = useState('Click this button below to start');
    const user1 = useRef(null);
    const user2 = useRef(null);
    const resultDice = useRef(null);
    let diceImages = [
        '../images/slime.png',
        '../images/logo192.png',
        '../images/face-to-face.png',
        '../images/drop.png',
        '../images/dice-shield.png',
        '../images/shopping-cart.png',
      ];
    const roll = () => {
        const firstRandomNum = Math.floor(Math.random() * 6);
        const secondRandomNum = Math.floor(Math.random() * 6);


  // uSED TO COMPARE VALUES FOR WINNER      
  // if (firstRandomNum > secondRandomNum) {
  //   //console.log(`The winner is user 1 with ${firstRandomNum + 1} points`);
  //   setResult(`The winner is user 1 with ${firstRandomNum + 1} points`);
  // } else if (firstRandomNum < secondRandomNum) {
  //   //console.log(`The winner is user 2 with ${secondRandomNum + 1} points`);
  //   setResult(`The winner is user 2 with ${secondRandomNum + 1} points`);
  // } else {
  //   //console.log(`It's a draw!`);
  //   setResult(`It's a draw!`);
  // }

  console.log(firstRandomNum + 1, secondRandomNum + 1);
  
//    const roll = () => {
    user1.current.setAttribute('src', diceImages[firstRandomNum]);
    user2.current.setAttribute('src', diceImages[secondRandomNum]);
  };

  return (
    <>
      <div className='dice-wrapper'>
        <div className='dice-area'>
          <p>User 1</p>
          <img src='../images/slime.png' ref={user1} alt='Dice' />
        </div>
        <div className='dice-area'>
          <p>User 2</p>
          <img src='../images/slime.png' ref={user2} alt='Dice' />
        </div>
      </div>
      <p className='result' ref={resultDice}>
        {result}</p>
      <button onClick={roll}>Roll the dice</button>
    </>
  );
}

export default Dices;