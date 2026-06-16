interface IconicLuxuryProps {
  onNext: () => void;
}

export default function IconicLuxury({ onNext }: IconicLuxuryProps) {
  const sections = [
    {
      title: "Private Eiffel Tower Experience",
      items: [
        "Skip public queues with VIP access or book a private dining experience at Le Jules Verne",
        "Best for: sunset champagne + skyline views",
        "Upgrade: private photographer session"
      ]
    },
    {
      title: "Michelin-Star Dining",
      subHeading: "Must-book Restaurants",
      items: [
        "Guy Savoy — ultra-refined French gastronomy",
        "Le Meurice Alain Ducasse — palace dining experience",
        "L'Ambroisie — classic, intimate, elite",
        "👉 Always reserve weeks in advance; concierge booking preferred."
      ]
    },
    {
      title: "Haute Shopping (Personalized)",
      items: [
        "Skip public queues with VIP access or book a private dining experience at Le Jules Verne",
        "Best for: sunset champagne + skyline views",
        "Upgrade: private photographer session"
      ]
    },
    {
      title: "Private Seine River Cruise",
      items: [
        "Charter a luxury boat along the Seine",
        "Add-ons: live violinist, sommelier-led wine tasting",
        "Ideal timing: golden hour into night (illuminated landmarks)"
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-start text-left animate-fadeIn font-sans pr-1 overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <h1 className="text-[26px] font-serif font-bold text-gray-900 mb-8 tracking-tight leading-tight">
        Iconic Luxury Experiences In Paris
      </h1>

      <div className="flex flex-col gap-8 w-full pb-10">
        {sections.map((sec, index) => (
          <div key={index} className="w-full flex flex-col justify-start">
            <div className="flex items-start gap-2.5 mb-3">
              <div className="w-[2.5px] min-w-[2.5px] h-[16px] bg-[#1E6762] rounded-full mt-1" />
              <h2 className="text-gray-900 text-[15px] font-semibold tracking-normal leading-snug">
                {sec.title}
              </h2>
            </div>

            {sec.subHeading && (
              <h3 className="text-gray-900 text-[13px] font-semibold tracking-wide pl-[15px] mb-2">
                {sec.subHeading}
              </h3>
            )}

            <ul className="flex flex-col gap-2.5 pl-[15px]">
              {sec.items.map((item, idx) => (
                <li 
                  key={idx} 
                  className={`text-[13px] text-gray-600 leading-relaxed list-none relative before:content-['•'] before:absolute before:-left-3.5 before:text-gray-400 ${
                    item.startsWith("👉") ? "before:content-none !pl-0" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}