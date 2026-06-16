interface SuggestedItineraryProps {
  onBack: () => void;
}

export default function SuggestedItinerary({ onBack }: SuggestedItineraryProps) {
  const daysData = [
    {
      day: "Day 1",
      title: "Edinburgh: Old Town, Castle & Views",
      activities: [
        "Unwind or enjoy an evening cruise on the Seine River",
        "Start with Edinburgh Castle, then walk down the Royal Mile, visit St Giles' Cathedral, explore Victoria Street, and finish with sunset at Calton Hill or Arthur's Seat. Arthur's Seat is one of the best viewpoints over Edinburgh, rising around 251 metres above sea level."
      ]
    },
    {
      day: "Day 2",
      title: "Edinburgh: Modern Art & Culture",
      activities: [
        "Explore the Scottish National Gallery of Modern Art",
        "Begin your day at the Modern One and Two galleries, appreciate contemporary works, and stroll through the beautiful grounds. In the afternoon, visit the vibrant Stockbridge area for unique shops and cafes."
      ]
    },
    {
      day: "Day 3",
      title: "Edinburgh: History & Heritage",
      activities: [
        "Discover the stories of the Scottish people",
        "Visit the National Museum of Scotland, then take a historical walking tour through Grassmarket. Don't miss the chance to try haggis at a local pub for an authentic experience."
      ]
    },
    {
      day: "Day 4",
      title: "Edinburgh: Nature & Relaxation",
      activities: [
        "Take a day trip to the Royal Botanic Garden",
        "Stroll through the expansive gardens, enjoy the exotic plants, and visit the Glasshouse. Spend the afternoon at Inverleith Park for a scenic view of the city skyline."
      ]
    },
    {
      day: "Day 5",
      title: "Edinburgh: Food & Drink",
      activities: [
        "Indulge in a culinary tour of local flavors",
        "Join a food tour in Leith, sampling fresh seafood, artisan cheeses, and local single malts."
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-start text-left animate-fadeIn font-sans">
      <div className="flex justify-between items-baseline mb-6 w-full border-b border-gray-100 pb-4">
        <h1 className="text-xl font-serif font-bold text-gray-900 tracking-tight">
          Suggested Itinerary
        </h1>
        <div className="text-right">
          <p className="text-[#1E6762] text-[12px] font-semibold tracking-wide">
            Itinerary based on the deal
          </p>
          <p className="text-gray-400 text-[11px] font-normal">
            Just a guide— the real adventure is up to you
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full overflow-y-auto pr-1 max-h-[calc(100vh-240px)] scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {daysData.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#F6F6F6] rounded-lg p-5 flex flex-col justify-start transition-all hover:bg-[#EEEEEF]"
          >
            <h3 className="text-[#1E6762] text-[14px] font-bold mb-3 tracking-normal">
              {item.day} — {item.title}
            </h3>

            <div className="flex flex-col gap-3">
              {item.activities.map((activity, actIndex) => (
                <div key={actIndex} className="flex items-start gap-3 text-[12.5px] text-gray-700 leading-relaxed">
                  <div className="w-[2.5px] min-w-[2.5px] h-[15px] bg-[#1E6762] rounded-full mt-0.5" />
                  <p className="font-normal">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}