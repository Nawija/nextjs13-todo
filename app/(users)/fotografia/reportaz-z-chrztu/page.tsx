import { notFound } from "next/navigation";
import { DatoCmsPhoto } from "@/typings";

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
            query: "{ allReportazZChrztus { img { id url } } }",
        }),
    });
    const datocms = await res.json();
    return datocms;
};

export default async function ReportazChrzestPage() {
    const datocmsResponse = await fetchTodo();

    if (!datocmsResponse) return notFound();

    const photos = datocmsResponse.data.allReportazZChrztus;

    return (
        <div className="flex flex-wrap ml-3">
            {photos.map((photoCollection: { img: DatoCmsPhoto[] }) =>
                photoCollection.img.map((photo: DatoCmsPhoto) => (
                    <img
                        className="p-1 object-cover h-72 opacityAnimation"
                        height={250}
                        width={260}
                        key={photo.id}
                        src={photo.url}
                    />
                ))
            )}
        </div>
    );
}
