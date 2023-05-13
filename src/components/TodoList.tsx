import { Todo } from "../model/Todo"

interface Props {
    todos: Todo[]
}

const TodoList = ({ todos }: Props) => {
    return (
        <>
            {todos.map((todo, idx) => (
                <li key={idx}>{todo.todo}</li>
            ))}
        </>
    )
}

export default TodoList