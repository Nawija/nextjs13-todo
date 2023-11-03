import Link from "next/link";

export default async function TodosList() {
    const categoriesLinks = [
        { path: "/fotografia-slubna", label: "Fotografia ślubna" },
        { path: "/Reportaz-z-chrztu", label: "Reportaż z chrztu" },
        { path: "/fotografia-komunijna", label: "Fotografia komunijna" },
        { path: "/wieczory-panieńskie", label: "Wieczory panieńskie" },
        { path: "/studniówki", label: "Studniówki" },
        { path: "/18-urodziny", label: "18 - urodziny" },
        { path: "/sesje-indywidualne", label: "Sesje indywidualne" },
        { path: "/sesje-brzuszkowe", label: "Sesje brzuszkowe" },
        { path: "/fotografia-sportowa", label: "Fotografia sportowa" },
        { path: "/fotografia-klubowa", label: "Fotografia klubowa" },
        { path: "/Zdjęcia-wizerunkowe", label: "Zdjęcia wizerunkowe" },
        { path: "/Zdjęcia-przemysłowe", label: "Zdjęcia przemysłowe" },
        { path: "/Zdjęcia-kulinarne", label: "Zdjęcia kulinarne" },
        { path: "/Zdjęcia-motoryzacyjne", label: "Zdjęcia motoryzacyjne" },
        { path: "/Zdjęcia-produktowe", label: "Zdjęcia produktowe" },
        
    ];
    return (
        <div className="flex flex-col pr-10 py-4 text-start h-screen overflow-y-auto border-r-2">
            {categoriesLinks.map((categoriesLink) => (
                <Link
                    key={categoriesLink.path}
                    href={`${categoriesLink.path}`}
                    className="hover:text-red-600 transition-colors p-1"
                >
                    {categoriesLink.label}
                </Link>
            ))}
        </div>
    );
}
