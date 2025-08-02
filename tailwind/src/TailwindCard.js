function TailwindCard() {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Tailwind Card</h2>
        <p className="text-gray-700">
          This is a card styled with <span className="font-semibold text-blue-600">Tailwind CSS</span>.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default TailwindCard;