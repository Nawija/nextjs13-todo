import TodosList from "./TodosList";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex max-w-screen-2xl mx-auto">
            <div>
                <TodosList />
            </div>
            <div className="flex-1">{children}</div>
        </main>
    );
}
