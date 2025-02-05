import GeneralOptions from "./GeneralOptions";
import TaskBoard from "./TaskBoard";


export default function ProjectContent() {
    return (
        <section className="w-full h-full flex flex-col">
            <GeneralOptions />
            <TaskBoard />
        </section>
    );
}