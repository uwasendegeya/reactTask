// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from './pages/Home';
// import { React } from 'react';

// // import About from './pages/About';
// import Header from './components/Header';
// import {fixedSizeList} from 'react-window';

// function App() {
// const lis=Array(1000).fill(items);
// return(
//   <div>
//     {lis.map(items)=>
//     <div>{items}</div>
//     }
//     </div>
// )
//     <Router>
//       {/* <Header/> */}
//       <Routes>
//         <Route path="/" element={<Header />} />
//         {/* <Route path="/about" element={<About />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default App;
