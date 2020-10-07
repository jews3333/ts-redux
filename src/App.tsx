import React from 'react';
import Counter from './components/Counter';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Counter/>
      <TodoInsert/>
      <TodoList/>
    </div>
  );
}

export default App;
