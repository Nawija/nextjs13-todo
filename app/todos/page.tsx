import TodosList from "./TodosList";

export default function Todos() {
    return (
        <>
            <p className="max-w-2xl mx-auto mt-12 text-3xl ">Hello todos</p>
            <div className="max-w-2xl mx-auto mt-12 flex flex-wrap">
                <TodosList />
            </div>
        </>
    );
}
