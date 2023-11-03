export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};
export type DatoCmsPhoto = {
    userId: number;
    id: number;
    img: {
        id: string;
        url: string;
    };
};
