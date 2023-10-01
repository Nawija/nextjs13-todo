export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex items-start justify-center w-full space-x-4 divide-x-2 divide-blue-100 p-5 max-w-screen-2xl mx-auto">
            <div>
                <h1 className="mt-1.5 font-medium text-sm">Wyniki wyszukiwania:</h1>
            </div>
            <div className="flex-1 pl-5">
                <div>{children}</div>
            </div>
        </main>
    );
}
