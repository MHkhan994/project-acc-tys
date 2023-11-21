export type Product = {
    id: string;
    name: string;
    description: string;
    photo: string;
    details: string;
    ratings: {
        average: number;
        total: number;
    };
    price: number;
    feature?: string;
    technical_specification?: string;
    picture_gallery?: string[];
    supports: string
}