"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="mt-3">
            <h2>Something went wrong!</h2>
            <button className="px-3 text-sm py-1.5 mt-2 font-medium bg-black text-white rounded-xl" onClick={() => reset()}>Try again</button>
        </div>
    );
}
