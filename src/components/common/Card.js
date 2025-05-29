export default function Card({ title, description, image, cta }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                {cta && (
                    <a href={cta.link} className="text-blue-500 hover:underline">
                        {cta.text}
                    </a>
                )}
            </div>
        </div>
    );
}