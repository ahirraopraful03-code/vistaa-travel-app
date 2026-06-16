interface QuietEscapesProps {
  onNext: () => void;
}

export default function QuietEscapes({ onNext }: QuietEscapesProps) {
  const spots = [
    { name: "Place des Vosges", detail: "Archways & Fountains" },
    { name: "Parc Monceau", detail: "Quiet Renaissance Pavilions" },
    { name: "Musée de la Vie Romantique", detail: "Hidden Courtyard Tea Room" },
    { name: "Jardin de l'Hôtel de Sully", detail: "Secret Marais Escape" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-start text-left animate-fadeIn font-sans pr-1 overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <h1 className="text-[26px] font-serif font-bold text-gray-900 mb-8 tracking-tight leading-tight">
        Quiet Escapes In Paris
      </h1>

      <div className="flex flex-col gap-8 w-full pb-10">
        <div className="w-full flex flex-col justify-start">
          <div className="flex items-start gap-2.5 mb-3">
            <div className="w-[2.5px] min-w-[2.5px] h-[16px] bg-[#1E6762] rounded-full mt-1" />
            <h2 className="text-gray-900 text-[15px] font-semibold tracking-normal leading-snug">
              Chateau Day Trips
            </h2>
          </div>
          <p className="text-gray-600 text-[13px] pl-[15px] font-normal leading-relaxed">
            Escape the city rush with a private tour of lesser-known estates like Château de Vaux-le-Vicomte, featuring candlelight evenings.
          </p>
        </div>

        <div className="w-full flex flex-col justify-start">
          <div className="flex items-start gap-2.5 mb-3">
            <div className="w-[2.5px] min-w-[2.5px] h-[16px] bg-[#1E6762] rounded-full mt-1" />
            <h2 className="text-gray-900 text-[15px] font-semibold tracking-normal leading-snug">
              Secret Gardens & Courtyards
            </h2>
          </div>
          <p className="text-gray-600 text-[13px] pl-[15px] font-normal leading-relaxed">
            Spend a quiet afternoon inside hidden hotel courtyards or tucked-away libraries with private garden access.
          </p>
        </div>

        <div className="w-full flex flex-col justify-start">
          <h3 className="text-gray-900 text-[14px] font-semibold tracking-wide mb-4 pl-[15px]">
            Must-Visit Quiet Spots
          </h3>

          <div className="flex flex-col gap-3.5 pl-[15px] w-full max-w-md">
            {spots.map((spot, index) => (
              <div key={index} className="flex items-center text-[13px]">
                <div className="flex items-center gap-2 w-[180px] text-gray-800 font-medium shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <span>{spot.name}</span>
                </div>
                <div className="text-gray-500 font-normal">
                  {spot.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}