"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header className="text-gray-800 flex items-center justify-between p-5 max-w-screen-2xl mx-auto">
            <Link
                href="/"
                className="flex font-medium items-center justify-center text-gray-900"
            >
                <svg
                    className="w-9 h-9 p-2 text-white rounded bg-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    ></path>
                </svg>
                <span className="ml-1 ">TailwindBlock</span>
            </Link>
            <button
                aria-label="Menu"
                className="lg:hidden bg-gray-100 p-2.5 z-50 rounded-lg order-1 lg:order-none"
            >
                <div className="w-4 h-0.5 m-1 rounded-lg bg-blue-600"></div>
                <div className="w-3 h-0.5 m-1 rounded-lg bg-blue-600"></div>
                <div className="w-2 h-0.5 m-1 rounded-lg bg-blue-600"></div>
            </button>
            <nav className="hidden lg:flex items-center justify-center relative text-sm">
                <li className="relative list-none overflow-hidden group p-2 mr-5">
                    <Link
                        href="/"
                        className="hover:text-blue-600 duration-300 font-medium transition-colors"
                    >
                        First Link
                    </Link>
                    <div className="absolute w-full h-1 bg-blue-300 bottom-0 left-0 z-0 rounded-lg -translate-x-full transition-transform hover:translate-x-0"></div>
                </li>
                <Link
                    href="/"
                    className="mr-5 hover:text-blue-600 duration-300 font-medium p-2 transition-colors"
                >
                    Second Link
                </Link>
                <Link
                    href="/"
                    className="mr-5 hover:text-blue-600 duration-300 font-medium p-2 transition-colors"
                >
                    Third Link
                </Link>
                <Link
                    href="/"
                    className="mr-5 hover:text-blue-600 duration-300 font-medium p-2 transition-colors"
                >
                    Fourth Link
                </Link>
            </nav>
            <Link
                href="/todos"
                className="bg-blue-600 text-white font-medium px-3 py-1.5 rounded flex items-center justify-center"
            >
                <span>Todos</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    ></path>
                </svg>
            </Link>
        </header>
    );
}
