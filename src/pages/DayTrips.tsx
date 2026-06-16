interface DayTripsProps {
  onNext: () => void;
}

export default function DayTrips({ onNext }: DayTripsProps) {
  return (
    <div className="w-full h-full flex flex-col justify-start text-left animate-fadeIn font-sans pr-1 overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <h1 className="text-[26px] font-serif font-bold text-gray-900 mb-2 tracking-tight leading-tight">
        Day trips from the Paris
      </h1>
      <p className="text-gray-500 text-[13px] font-normal mb-6 italic leading-relaxed">
        luxury Paris traveler, day trips should feel like seamless extension the city—curated
      </p>

      <div className="flex flex-col gap-6 w-full pb-10">
        <div className="w-full flex flex-col justify-start">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-[#1E6762] text-[15px] font-light">|</span>
            <h2 className="text-gray-900 text-[15px] font-medium tracking-normal">
              Versailles (Royal, but do it right)
            </h2>
          </div>
          <ul className="pl-6 space-y-2 text-[13px] text-gray-600 font-normal">
            <li className="flex items-center gap-1 text-[#1E6762] font-semibold">
              📍 <span className="underline cursor-pointer">Palace of Versailles</span>
            </li>
            <li className="list-disc pl-1">Go before public opening or via private guided entry</li>
            <li className="list-disc pl-1">Focus beyond the palace: gardens, Grand Trianon, Marie Antoinette's estate</li>
            <li className="list-disc pl-1">Upgrade: golf cart through gardens + picnic setup</li>
          </ul>
        </div>

        <div className="w-full flex flex-col justify-start">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-[#1E6762] text-[15px] font-light">|</span>
            <h2 className="text-gray-900 text-[15px] font-medium tracking-normal">
              Versailles (Royal, but do it right)
            </h2>
          </div>
          <ul className="pl-6 space-y-2 text-[13px] text-gray-600 font-normal">
            <li className="flex items-center gap-1 text-[#1E6762] font-semibold">
              📍 <span className="underline cursor-pointer">Palace of Versailles</span>
            </li>
            <li className="list-disc pl-1">Go before public opening or via private guided entry</li>
            <li className="list-disc pl-1">Focus beyond the palace: gardens, Grand Trianon, Marie Antoinette's estate</li>
            <li className="list-disc pl-1">Upgrade: golf cart through gardens + picnic setup</li>
          </ul>
        </div>

        <div className="w-full flex flex-col justify-start">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-[#1E6762] text-[15px] font-light">|</span>
            <h2 className="text-gray-900 text-[15px] font-medium tracking-normal">
              Versailles (Royal, but do it right)
            </h2>
          </div>
          <ul className="pl-6 space-y-2 text-[13px] text-gray-600 font-normal">
            <li className="flex items-center gap-1 text-[#1E6762] font-semibold">
              📍 <span className="underline cursor-pointer">Palace of Versailles</span>
            </li>
            <li className="list-disc pl-1">Go before public opening or via private guided entry</li>
            <li className="list-disc pl-1">Focus beyond the palace: gardens, Grand Trianon, Marie Antoinette's estate</li>
            <li className="list-disc pl-1">Upgrade: golf cart through gardens + picnic setup</li>
          </ul>
        </div>

        <div className="w-full flex flex-col justify-start">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-[#1E6762] text-[15px] font-light">|</span>
            <h2 className="text-gray-900 text-[15px] font-medium tracking-normal">
              Versailles (Royal, but do it right)
            </h2>
          </div>
          <ul className="pl-6 space-y-2 text-[13px] text-gray-600 font-normal">
            <li className="flex items-center gap-1 text-[#1E6762] font-semibold">
              📍 <span className="underline cursor-pointer">Palace of Versailles</span>
            </li>
            <li className="list-disc pl-1">Go before public opening or via private guided entry</li>
            <li className="list-disc pl-1">Focus beyond the palace: gardens, Grand Trianon, Marie Antoinette's estate</li>
            <li className="list-disc pl-1">Upgrade: golf cart through gardens + picnic setup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}