

export default function TaskCard({task}: {task: Task}) {
    return (
        <div id={`task-${task.id}`} className="bg-white p-4 rounded-lg mt-2">
                    {/* Pasar a componente */}
                    <header className="flex justify-between items-center mb-4">
                        <span className="flex items-center space-x-2">
                            <input type="checkbox" name="" id="" className="w-4 h-4" />
                            <h6 className="font-bold text-gray-800 cursor-pointer">{task.title}</h6>
                        </span>
                        <button className="px-2 py-1 bg-transparent text-gray-800 text-xs rounded-lg border font-extrabold">
                            ...
                        </button>
                    </header>

                    <p className="text-gray-500">
                        {/* {task.description.slice(0, 200)}... */}
                        {task.description.length > 200 ? `${task.description.slice(0, 200)}...` : task.description}
                    </p>

                    <div className="flex justify-between items-center my-4">
                        <div className="flex items-center">
                            {task.tags.map((tag) => (
                                <span key={`tag-${tag.id}`} className="px-2 py-1 text-gray-800 text-xs rounded-lg mr-1" style={{ background: tag.color }}>{tag.title}</span>   
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center my-4">
                        { task.comments.length > 0 && (
                            <div className="flex items-center">
                                {
                                    task.comments.length > 0 && task.comments.map((comment, index) => (
                                        <div key={`comment-${comment.id}`}>
                                            <img src={comment.avatar} alt="avatar" className={`w-6 h-6 rounded-full border ${ index > 0 ? '-ml-2': '' }`} />
                                        </div>
                                    ))
                                }
                                <span className="text-gray-800 text-sm ml-1">{task.comments.length} comments</span>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center text-gray-800 text-xs p-1 rounded-md">
                            <progress value={task.progress} max="1" className="w-24 h-2 rounded-md "></progress>
                            <span className="ml-1">{Math.round(task.progress * 100)}%</span>
                        </div>

                        {/* Pasar a componente, validar si existe dia, hora y minutos yu mostrar lo correspondiente */}
                        <div className="flex items-center text-gray-800 text-xs bg-slate-100 p-1 rounded-md">
                            <span> Est.</span>
                            <span className="mr-1">{task.estimations.days}d</span>
                            <span className="mr-1">{task.estimations.hours}h</span>
                            <span>{task.estimations.minutes}m</span>
                        </div>
                    </div>
                </div>
    );
}