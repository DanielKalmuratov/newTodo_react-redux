import './App.css';
import Input from './components/input'
import TodoItem from './components/todoItem'

import {useSelector} from 'react-redux'
import {selectTodoList} from './redux/todoSlice'

function App() {

  const todoList = useSelector(selectTodoList)
  console.log(todoList);

  return (
    <div className="App">
      <div className="app__container">
        <div className="todo__container">
          <h1>Todo App</h1>
          {
            todoList.map(item => (
              <TodoItem
                name={item.name}
                id={item.id}
                done={item.done}
                key={item.id}
              />
            ))
          }
        </div>
        <Input />
      </div>

    </div>
  );
}

export default App;
