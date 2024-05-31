import axios from "axios"

export interface Post {
    id: number;
    title: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error: any) {
        console.log(`Error to fetch posts: ${error.message}`)
        return [];
    }
}