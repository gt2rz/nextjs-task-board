interface Tag {
    id: number;
    title: string;
    color: string;
}

interface Task {
    id: number;
    title: string;
    description: string;
    tags: Tag[];
    comments: {
        id: number;
        author: string;
        avatar: string;
        content: string;
    }[];
    progress: number;
    estimations: {
        days: number;
        hours: number;
        minutes: number;
    };
}

interface Pool {
    id: number;
    title: string;
    tasks: Task[];
}