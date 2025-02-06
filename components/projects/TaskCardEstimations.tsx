

export default function TaskCardEstimations({ estimations }: { estimations: Estimations }) {
    return (
        <div className="flex items-center text-gray-800 text-xs bg-slate-100 p-1 px-2 rounded-sm">
            <span> Est.</span>
            {estimations.days && estimations.days > 0 && (
                <span className="mr-1">{estimations.days}d</span>
            )}
            {estimations.hours && estimations.hours > 0 && (
                <span className="mr-1">{estimations.hours}h</span>
            )}
            {estimations.minutes && estimations.minutes > 0 && (
                <span>{estimations.minutes}m</span>
            )}
        </div>
    );
}