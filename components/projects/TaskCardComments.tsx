import { Comment } from "@/types";

export default function TaskCardComments({ comments }: { comments: Comment[] }) {
    return (
        <div className="flex items-center my-4">
            {comments.length > 0 && (
                <div className="flex items-center">
                    {
                        comments.length > 0 && comments.map((comment, index) => (
                            <div key={`comment-${comment.id}`}>
                                <img src={comment.avatar} alt="avatar" className={`w-6 h-6 rounded-full border ${index > 0 ? '-ml-2' : ''}`} />
                            </div>
                        ))
                    }
                    <span className="text-gray-800 text-sm ml-1">{comments.length} comments</span>
                </div>
            )}
        </div>
    );
}