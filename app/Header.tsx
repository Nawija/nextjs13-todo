"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname();
    return (
        <header
            className={`text-gray-800 p-5 mb-4 ${
                pathName === "/" ? "" : "shadow-lg shadow-gray-200/40"
            }`}
        >
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                <Link
                    href="/"
                    className="flex font-medium items-center justify-center text-gray-900"
                >
                    <span className="ml-1 font-semibold">JAREK OLSZEWSKI</span>
                </Link>
                <button
                    aria-label="Menu"
                    className="lg:hidden bg-gray-100 p-2.5 z-50 rounded-lg order-1 lg:order-none"
                >
                    <div className="w-4 h-0.5 m-1 rounded-lg bg-yellow-600"></div>
                    <div className="w-3 h-0.5 m-1 rounded-lg bg-yellow-600"></div>
                    <div className="w-2 h-0.5 m-1 rounded-lg bg-yellow-600"></div>
                </button>
                <div className="items-center justify-center space-x-2 text-sm hidden lg:flex">

                    <Link
                        href="/todos"
                        className="bg-gray-700 flex hover:bg-gray-800 transition-colors text-white font-medium px-3 py-1.5 rounded-xl items-center justify-center"
                    >
                        <span>Portfolio</span>
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
