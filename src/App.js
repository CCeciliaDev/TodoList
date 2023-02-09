import { useState} from "react"
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }
    // Ajouter une tâche
    setList([...list, newTodo])

    // Clear input box
    setInput("");
  }

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  return (
    <div className="mainDiv">
      <div className="todoDiv">
        <h1 className="title"><span className="myText">My</span> To Do List</h1>
        <div className="mainDivTodoList">
        <div className="divInput">
        <input 
          className="input"
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button className="buttonAdd" onClick={() => addTodo(input)}>Ajouter</button>
        </div>
          {list.map((todo) => (
            
              <div className="divTodoList" key={todo.id}>
                <div className="todoList">&#x279E; {todo.todo}</div>
                <div><div className="buttonSupp" onClick={() => deleteTodo(todo.id)}>&#x274C;</div></div>
              </div>
          
          ))}
          
        </div>
        <div className="divButtonImp">
            <button className="buttonImp">Imprimer</button>
          </div>
        </div>
    </div>
  );
}

export default App;
