import Link from "next/link";

type PageProps = {
    params: {
        searchTerm: string;
    };
};
type SearchResult = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ];
};

const search = async (searchTerm: string) => {
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    );

    const data: SearchResult = await res.json();
    return data;
};

export default async function SearchResults({
    params: { searchTerm },
}: PageProps) {
    const decodedSearchTerm = decodeURIComponent(
        searchTerm.replace(/%20/g, " ")
    );
    const searchResults = await search(searchTerm);
    return (
        <div>
            <p className="text-gray-500 text-sm flex items-center justify-start">
                Fraza wyszukiwania: <p className="px-3 py-1 ml-2 text-gray-700 rounded-2xl bg-blue-50">{decodedSearchTerm}</p>
            </p>
            <ol className="space-y-5 p-5">
                {searchResults.organic_results.map((result) => (
                    <li key={result.position} className="list-decimal">
                        <Link
                            href={result.link}
                            target="_blank"
                            className="font-bold hover:underline"
                        >
                            {result.title}
                        </Link>
                        <p>{result.snippet}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}
