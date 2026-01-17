export default function Projects() {
    return (
        <section className="p-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map(i => (
                <div key={i} className="border p-4 rounded">
                    <h2 className="font-bold">Project {i}</h2>
                    <p className="text-sm text-gray-500">
                        Placeholder project description
                    </p>
                </div>
            ))}
        </section>
    );
}
