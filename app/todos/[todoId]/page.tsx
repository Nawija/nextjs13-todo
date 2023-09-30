type PageProps = {
    params: {
        todoId: string;
    };
};

const fetchTodo = async (todoId: string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        { next: { revalidate: 60 } }
    );
    const todo = await res.json();
    return todo;
};

export default async function TodoPage({ params: { todoId } }: PageProps) {
    const todo = await fetchTodo(todoId);
    return (
        <>
            <p className="max-w-2xl mx-auto mt-12 text-3xl ">Hello todos</p>
            <div className="max-w-2xl mx-auto mt-12 flex items-start justify-center flex-col space-y-2">
                <p>
                    #{todo.id}: {todo.title}
                </p>
                <p>Completed: {todo.completed ? "yes" : "no"}</p>
                <p> By User: {todo.userId}</p>
            </div>
        </>
    );
}
