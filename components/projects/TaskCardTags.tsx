
export default function TaskCardTags({tags}: {tags: Tag[]}) {
    return (
        <div className="flex justify-between items-center my-4">
            <div className="flex items-center">
                {tags.map((tag) => (
                    <span key={`tag-${tag.id}`} className="px-2 py-1 text-gray-800 text-xs rounded-lg mr-1" style={{ background: tag.color }}>{tag.title}</span>
                ))}
            </div>
        </div>
    );
}