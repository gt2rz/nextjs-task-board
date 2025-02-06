

export default function TaskCardProgress({ progress }: { progress: number }) {
    return (
        <div className="flex items-center text-gray-800 text-xs p-1 rounded-md">
            <progress value={progress} max="1" className="w-24 h-2 rounded-md "></progress>
            <span className="ml-1">{Math.round(progress * 100)}%</span>
        </div>
    );
}