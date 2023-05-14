import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model/Todo";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<Todo[]>([])
  const [todos, setTodos] = useLocalStorage<Todo[]>("myTodos", []);
  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: todo,
          isDone: false,
        },
      ]);
      setTodo("");
      console.log(todos);
    }
  };

  return (
    <div className="App flex flex-col items-center mx-auto min-h-screen w-screen">
      <span className="heading text-3xl my-5 md:text-5xl md:my-8 text-white uppercase  text-center">
        Todofy
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
