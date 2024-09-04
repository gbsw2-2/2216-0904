import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useRef, useState } from "react";

const mockTodo = [
  {
    id: 0,
    content: "리액트",
    createdDate: new Date(),
    isDone: false,
  },
  {
    id: 1,
    content: "스프링",
    createdDate: new Date().getTime(),
    isDone: false,
  },
  {
    id: 2,
    content: "자바",
    createdDate: new Date().getTime(),
    isDone: false,
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item) =>
        item.id === targetId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((item) => item.id !== targetId));
  };

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      createdDate: new Date().getTime(),
      isDone: false,
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
