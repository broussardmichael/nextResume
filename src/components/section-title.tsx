export default function SectionTitle({title}: { title: string }) {
    return (
        <div className="w-full content-section">
            <h2>{title}</h2>
            <hr className="border-black border-t-2"/>
        </div>
    );
}
