export default function SectionTitle({title}: {title: string}) {
    return (
        <div className="w-full mb-4">
            <h1 className="font-bold text-xl w-full">{title}</h1>
            <hr className="border-black border-t-2 w-full"/>
        </div>
    );
}
