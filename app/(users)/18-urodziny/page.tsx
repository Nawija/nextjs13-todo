import { notFound } from "next/navigation";

export const dynamicParams = true;

const fetchTodo = async () => {
    const res = await fetch("https://graphql.datocms.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        },
        body: JSON.stringify({
            query: "{ photo { title } }",
        }),
    });
    const datocms = await res.json();
    return datocms;
};

export default async function TodoPage() {
    const datocms = await fetchTodo();

    // if (!datocms.title) return notFound();
    console.log(datocms);

    return (
        <div className="p-10">
            <p className="text-4xl font-semibold text-gray-800">
                {datocms.data.photo.title}
            </p>
            <div className="flex items-start justify-center flex-col space-y-1"></div>
        </div>
    );
}
