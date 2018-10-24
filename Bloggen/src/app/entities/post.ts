export interface Post {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    frontpageUrl?: string;
    text: string;
    category: string;
    showOnFrontpage: boolean;
}