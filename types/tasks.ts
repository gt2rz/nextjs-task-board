interface Tag {
    id: number;
    title: string;
    color: string;
    borderColor?: string;
    textColor?: string;
}

interface Comment {
    id: number;
    author: string;
    avatar: string;
    content: string;
}

interface Estimations {
    days?: number;
    hours?: number;
    minutes?: number;
}

interface Task {
    id: number;
    title: string;
    description: string;
    tags: Tag[];
    comments: Comment[];
    progress: number;
    estimations: Estimations;
}

interface Pool {
    id: number;
    title: string;
    projectId: string;
    sort: number;
    tasks: Task[];
}