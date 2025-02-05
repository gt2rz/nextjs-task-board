
export default function PrimaryButton({children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} className="max-w-36 h-12 bg-sky-900 rounded-md text-white px-4 font-medium align-middle text-center">
            {children}
        </button>
    );
}