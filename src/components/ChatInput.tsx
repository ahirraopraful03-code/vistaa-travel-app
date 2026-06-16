export default function ChatInput() {
  return (
    <div className="p-5 bg-white border-t border-gray-50">
      <div className="w-full border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between bg-white focus-within:border-gray-300 transition-all">
        <input
          type="text"
          placeholder="Ask Anything"
          className="w-full bg-transparent outline-none text-base text-gray-600 placeholder-gray-400 font-light"
        />
        <div className="flex items-center gap-4 text-gray-400 pl-2">
          <button className="hover:text-gray-600 transition-colors text-xl font-light">📎</button>
          <button className="hover:text-gray-600 transition-colors text-xl font-light">🎙️</button>
          <button className="hover:text-gray-600 transition-colors text-lg transform rotate-45">➤</button>
        </div>
      </div>
    </div>
  );
}