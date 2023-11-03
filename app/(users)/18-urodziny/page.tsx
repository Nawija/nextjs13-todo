import { notFound } from "next/navigation";
import { DatoCmsPhoto } from "@/typings";

export const dynamicParams = true;

const fetchTodo = async () => {
    const res = await fetch("https://graphql.datocms.com/", {
        next: { revalidate: 60 },
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        },
        body: JSON.stringify({
            query: "{ allPhotos { img {id url} } }",
        }),
    });
    const datocms = await res.json();
    return datocms;
};

export default async function TodoPage() {
    const datocms = await fetchTodo();

    if (!datocms) return notFound();
    console.log(datocms.data);

    return (
        <div className="flex flex-wrap ml-3">
            {datocms.data.allPhotos.map((photo: DatoCmsPhoto) => (
                <img
                    className="p-1 object-cover"
                    height={250}
                    width={250}
                    key={photo.img.id}
                    src={photo.img.url}
                />
            ))}
        </div>
    );
}
