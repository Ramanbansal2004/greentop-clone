// components/TestimonialCard.js
export default function TestimonialCard({ text, name, company, avatar }) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
      <p className="text-gray-700 text-base mb-4">{text}</p>
      <div className="flex items-center space-x-3">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
}
