'use client';

export default function Input({
  searchInput,
  setSearchInput,
}: {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <label
        htmlFor="domain"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Domain
      </label>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        id="domain"
        placeholder="Enter domain"
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder-gray-400 text-gray-900"
      />
    </div>
  );
}
