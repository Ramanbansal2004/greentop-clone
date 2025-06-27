import TestimonialCard from "./components/TestimonialCard";
import CarouselComponent from "./components/CarouselComponent";
export default function Home() {
  const cards = [
    { link: "https://www.google.com", seed: "one", title: "Fences & Decks" },
    { link: "https://www.bbc.com", seed: "two", title: "Landscaping" },
    {
      link: "https://www.wikipedia.org",
      seed: "three",
      title: "Outdoor Lighting",
    },
    { link: "https://www.apple.com", seed: "four", title: "Pergolas" },
    {
      link: "https://www.microsoft.com",
      seed: "five",
      title: "Retaining Walls",
    },
    { link: "https://www.openai.com", seed: "six", title: "Custom Patios" },
  ];
  const testimonials = [
    {
      text: "y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, bu",
      name: "Wes Bos",
      company: "Internet",
      avatar: "/avatars/wes.jpg",
    },
    {
      text: "y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, bu",
      name: "Kent C. Dodds",
      company: "Internet",
      avatar: "/avatars/kent.jpg",
    },
    {
      text: "I really like how Cursor suggests edits to existing code. It noticed I was inconsistent with my markup and popped up this suggestion that matched my other items!",
      name: "Wes Bos",
      company: "Internet",
      avatar: "/avatars/wes.jpg",
    },
    {
      text: "I really like how Cursor suggests edits to existing code. It noticed I was inconsistent with my markup and popped up this suggestion that matched my other items!",
      name: "Wes Bos",
      company: "Internet",
      avatar: "/avatars/wes.jpg",
    },
    {
      text: "Cursor is awesome! Someone finally put GPT into a code editor in a seamless way.",
      name: "Andrew McCalip",
      company: "Varda",
      avatar: "/avatars/andrew.jpg",
    },
    {
      text: "After many recommendations, I finally switched from VSC to Cursor and … wow!",
      name: "Johannes Schickling",
      company: "Internet",
      avatar: "/avatars/johannes.jpg",
    },
    {
      text: "Cursor is at least a 2x improvement over Copilot. It's amazing having an AI pair programmer.",
      name: "Ben Bernard",
      company: "Internet",
      avatar: "/avatars/ben.jpg",
    },
    {
      text: "Cursor is the best AI developer tool right now, avoid it at your own peril",
      name: "Someone",
      company: "Internet",
      avatar: "/avatars/default.jpg",
    },
    {
      text: "I really like how Cursor suggests edits to existing code. It noticed I was inconsistent with my markup and popped up this suggestion that matched my other items!",
      name: "Wes Bos",
      company: "Internet",
      avatar: "/avatars/wes.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-16 flex flex-col items-center w-full">
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
              <h1 className="text-white text-xl font-bold mb-4">
                {card.title}
              </h1>
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
      <div className="w-full mt-24 px-10 sm:px-8 lg:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">What Client Says</h2>
        </div>

        <div className="w-full overflow-visible py-10">
          <div className="flex flex-col sm:flex-row gap-6">
            {[0, 1, 2].map((colIdx) => (
              <div key={colIdx} className="flex-1 flex flex-col gap-3">
                {testimonials
                  .filter((_, idx) => idx % 3 === colIdx)
                  .map((t, idx) => (
                    <TestimonialCard key={`${colIdx}-${idx}`} {...t} />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
            <CarouselComponent />
      </div>
    </div>
  );
}
