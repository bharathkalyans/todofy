import { Todo } from "../model/Todo"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {

    const handleDone = (id: number) => {
        console.log(id);
        const changedTodos: Todo[] = todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo);
        setTodos(changedTodos);
    }

    const handleDelete = (id: number) => {
        const newTodos: Todo[] = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <form className="todos__single">
            {todo.isDone
                ? (<s className="todos__single--text">{todo.todo}</s>)
                : (<span className="todos__single--text">{todo.todo}</span>)
            }

            <div className="flex">
                <span className="icon"><AiFillEdit /></span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                <span className="icon" onClick={() => handleDone(todo.id)}> <MdDone /> </span>
            </div>
        </form>
    )
}

export default SingleTodo