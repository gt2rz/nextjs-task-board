
interface HeaderPageProps {
    title: string;
    children?: React.ReactNode;
} 

export default function HeaderPage({title, children, ...props }: HeaderPageProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className="header-page w-full h-24 bg-gray-50 flex items-center justify-between">
            <h1 id="header-page--title" className="text-2xl font-bold text-gray-900">
                {title}
            </h1>
            <div id="header-page--actions" className="flex items-center justify-end">
                {children}
            </div>
        </div>
    );
}