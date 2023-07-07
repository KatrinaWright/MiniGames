import React, { useState, useRef } from 'react';

import './index.css';

function Dices() {
    const user1 = useRef(null);
  const user2 = useRef(null);

  let diceImages = [
    '../images/slime.png',
    '../images/logo192.png',
    '../images/logo512.png',
    // '../images/dice4.svg',
    // '../images/dice5.svg',
    // '../images/dice6.svg',
  ];

  const firstRandomNum = Math.floor(Math.random() * 6);
  const secondRandomNum = Math.floor(Math.random() * 6);

  if (firstRandomNum > secondRandomNum) {
    console.log(`The winner is user 1 with ${firstRandomNum + 1} points`);
  } else if (firstRandomNum < secondRandomNum) {
    console.log(`The winner is user 2 with ${secondRandomNum + 1} points`);
  } else {
    console.log(`It's a draw!`);
  }

  console.log(firstRandomNum, secondRandomNum);

  /*
  // Generate a random number 1 to 6
  const firstRandomNum = Math.floor(Math.random() * 6) + 1;
  // images/dice1.svg upto images/dice6.svg
  const firstDiceImage = '../../images/dice' + firstRandomNum + '.svg';
  document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
  // Generate a random number 1 to 6
  const secondRandomNum = Math.floor(Math.random() * 6) + 1;
  // images/dice1.svg upto images/dice6.svg
  const secondDiceImage = '../../images/dice' + secondRandomNum + '.svg';
  document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);
  //
  function roll() {
    if (firstRandomNum > secondRandomNum) {
      document.getElementsByClassName('result').innerHTML =
        'The winner is user 1 with ${firstRandomNum} points';
    } else if (firstRandomNum < secondRandomNum) {
      document.getElementsByClassName('result').innerHTML =
        'The winner is user 2 with ${secondRandomNum} points';
    } else {
      document.getElementsByClassName('result').innerHTML = 'It is a draw!';
    }
  }
  roll();
  */
    const roll = () => {
    user1.current.setAttribute('src', '/images/slime.png');
    user2.current.setAttribute('src', '/images/logo192.png');
  };
  return (
    <>
      <div className='dice-wrapper'>
        <div className='dice-area'>
          <p>User 1</p>
          <img ref={user1} />
        </div>
        <div className='dice-area'>
          <p>User 2</p>
          <img ref={user2} />
        </div>
      </div>
      <p className='result'>The winner is user X with Y points</p>
      <button onClick={roll}>Roll the dice</button>
    </>
  );
}

export default Dices;