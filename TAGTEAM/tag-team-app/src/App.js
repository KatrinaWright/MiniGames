// // import logo from './logo.svg'; // should be able to remove this react logo
// import './App.css';

// function App() {
//   return (
    
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

    // DEFAULT CODE ABOVE, SHOULD BE ABLE TO DELETE SAFELY

// import './App.css'

// function App() {
//   const canvas = document.querySelector('canvas')

//   const ctx = canvas.current.getContext('2d') 

//   canvas.width = 1024 // want this to be reactive, will alter soon
//   canvas.height = 576 // want this to be reactive, will alter soon

//   ctx.fillStyle = 'white'
//   ctx.fillRect(0, 0, canvas.width, canvas.height)

//   console.log(canvas)

//   return (
//     <>
//       <canvas></canvas>
//     </>
//   );
// }

import Canvas from './components/Canvas';
import './App.css'

const draw = context => {

  // insert canvas API code to draw an image?
};

function App() {
  return (
    <Canvas draw={draw} height={576} width={1024} />
  );
}

export default App;
