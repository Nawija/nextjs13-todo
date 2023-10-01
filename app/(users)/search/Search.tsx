"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
        router.push(`/search/${search}`);
    };
    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={search}
                className="py-1.5 px-5 text-sm border rounded-xl hover:border-blue-600 transition-colors"
                placeholder="Szukaj w internecie"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                type="submit"
                className="border text-blue-600 ml-2 py-1.5 px-4 rounded-xl hover:border-blue-600 transition-colors"
            >
                Szukaj
            </button>
        </form>
    );
}
