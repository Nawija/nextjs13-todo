"use client";

import Link from "next/link";
import Search from "./(users)/search/Search";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname();
    return (
        <header
            className={`text-gray-800 p-5 mb-4 ${
                pathName === "/" ? "" : "shadow-lg"
            }`}
        >
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                <Link
                    href="/"
                    className="flex font-medium items-center justify-center text-gray-900"
                >
                    <svg
                        className="w-8 h-8 p-2 text-white rounded bg-blue-600"
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
                    <span className="ml-1 font-semibold">Seovileo</span>
                </Link>
                <button
                    aria-label="Menu"
                    className="lg:hidden bg-gray-100 p-2.5 z-50 rounded-lg order-1 lg:order-none"
                >
                    <div className="w-4 h-0.5 m-1 rounded-lg bg-blue-600"></div>
                    <div className="w-3 h-0.5 m-1 rounded-lg bg-blue-600"></div>
                    <div className="w-2 h-0.5 m-1 rounded-lg bg-blue-600"></div>
                </button>
                <div className="flex items-center justify-center space-x-2 text-sm">
                    <Search />

                    <Link
                        href="/todos"
                        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium px-3 py-1.5 rounded-xl flex items-center justify-center"
                    >
                        <span>Do zrobienia</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="w-3 h-3 ml-1"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}
