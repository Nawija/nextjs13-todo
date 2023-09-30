import { Todo } from "@/typings";
import Link from "next/link";

const fetchTodos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos: Todo[] = await res.json();
    return todos;
};

export default async function TodosList() {
    const todos = await fetchTodos();
    return (
        <>
            {todos.map((todo) => (
                <Link
                    key={todo.id}
                    href={`/todos/${todo.id}`}
                    className="hover:text-blue-600 transition-colors p-2 w-max"
                >
                    Todo {todo.id}
                </Link>
            ))}
        </>
    );
}
