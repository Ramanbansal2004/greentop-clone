export default function Home() {
  const cards = [
    { link: "https://www.google.com", seed: "one", title: "Fences & Decks" },
    { link: "https://www.bbc.com", seed: "two", title: "Landscaping" },
    { link: "https://www.wikipedia.org", seed: "three", title: "Outdoor Lighting" },
    { link: "https://www.apple.com", seed: "four", title: "Pergolas" },
    { link: "https://www.microsoft.com", seed: "five", title: "Retaining Walls" },
    { link: "https://www.openai.com", seed: "six", title: "Custom Patios" },
  ];

  return (
    <div className="min-h-screen px-4 py-16 flex flex-col items-center">
      <p
        className="text-center text-[18px] font-medium"
        style={{ color: "#568203" }}
      >
        What we Have Done
      </p>
      <h1 className="text-4xl font-bold mt-3 text-center">
        Our Providing Services
      </h1>

      {/* Image Deck with Overlay */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-7xl px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full h-60 rounded-lg overflow-hidden group shadow-md"
          >
            {/* Image */}
            <img
              src={`https://picsum.photos/seed/${card.seed}/400/600`}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:translate-x-full"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#568203] flex flex-col items-center justify-center text-center px-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000">
              <h1 className="text-white text-xl font-bold mb-4">{card.title}</h1>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white text-white font-semibold hover:text-[#568203] py-2 px-4 border border-white hover:border-transparent rounded transition-colors duration-300"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
