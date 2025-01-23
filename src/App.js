
  import React, { useReducer } from 'react';

  function counterReducer(state, action) {
      switch (action.type) {
          case 'add':
              if (action.payload.trim() === '') return state;
              return { ...state, items: [...state.items, action.payload], input: '' };
          case 'delete':
              return { ...state, items: state.items.filter((_, index) => index !== action.index) };
          case 'updateInput':
              return { ...state, input: action.payload };
          default:
              return state;
      }
  }
  
  const App = () => {
      const [state, dispatch] = useReducer(counterReducer, { input: '', items: [] });
  
      return (
          <>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <div style={{ width: '50%', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
                      <h1>ToDo App</h1>
                      <input
                          type="text"
                          placeholder="Enter task"
                          value={state.input}
                          onChange={(e) => dispatch({ type: 'updateInput', payload: e.target.value })}
                          style={{ padding: '10px', width: '80%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                      />
                      <button
                          onClick={() => dispatch({ type: 'add', payload: state.input })}
                          style={{ padding: '10px', marginLeft: '10px', borderRadius: '5px', backgroundColor: '#28a745', color: 'white', border: 'none' }}
                      >
                          Add
                      </button>
                      <h2>ToDo List</h2>
                      <div>
                          {state.items.map((item, index) => (
                              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                  <span>{item}</span>
                                  <button
                                      onClick={() => dispatch({ type: 'delete', index })}
                                      style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#dc3545', color: 'white', border: 'none' }}
                                  >
                                      Delete
                                  </button>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </>
      );
  };
  
  export default App;
