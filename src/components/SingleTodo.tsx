import { useEffect, useRef, useState } from "react";
import { Todo } from "../model/Todo";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        console.log(id);
        const changedTodos: Todo[] = todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        );
        setTodos(changedTodos);
    };

    const handleDelete = (id: number) => {
        const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const handleEdit = (e: React.FormEvent<EventTarget>, id: number) => {
        e.preventDefault();

        const changedTodos: Todo[] = todos.map((todo) =>
            todo.id === id ? { ...todo, todo: editTodo } : { ...todo }
        );

        setTodos(changedTodos);
        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    return (
        <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>

            {
                edit ? (
                    <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                ) : (
                    todo.isDone ? (
                        <s className="todos__single--text">{todo.todo}</s>
                    ) : (
                        <span className="todos__single--text">{todo.todo}</span>
                    )
                )
            }


            <div className="flex">
                <span className="icon todos__single--text" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }
                }>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
