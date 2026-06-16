import { MapPin } from "lucide-react";

interface SignatureLuxuryProps {
  onBack: () => void;
}

export default function SignatureLuxury({ onBack }: SignatureLuxuryProps) {
  const cities = [
    { name: "Udaipur", detail: "Lakes & Luxury" },
    { name: "Jodhpur", detail: "Blue City Charm" },
    { name: "Jaipur", detail: "Palaces & Shopping" },
    { name: "Jaisalmer", detail: "Desert Retreats" },
  ];

  return (
    <div className="w-full flex flex-col justify-start text-left animate-fadeIn font-sans pl-2">
      <h1 className="text-[28px] font-serif font-bold text-gray-900 mb-6 tracking-tight leading-tight">
        Signature Luxury Experiences
      </h1>

      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="w-[3px] h-4 bg-[#1E6762] rounded-full" />
          <h2 className="text-gray-900 text-[14px] font-semibold tracking-wide">
            Royal Palace Stay
          </h2>
        </div>
        <p className="text-gray-600 text-[13px] pl-[13px] font-normal leading-relaxed">
          Live in a 200-year-old palace with butler service.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="w-[3px] h-4 bg-[#1E6762] rounded-full" />
          <h2 className="text-gray-900 text-[14px] font-semibold tracking-wide">
            Private Wildlife Safari
          </h2>
        </div>
        <p className="text-gray-600 text-[13px] pl-[13px] font-normal leading-relaxed max-w-xs">
          Jeep safaris with gourmet lunches in Ranthambore.
        </p>
      </div>

      <div>
        <h3 className="text-gray-900 text-[14px] font-semibold tracking-wide mb-4 pl-[13px]">
          Must-Visit Cities
        </h3>

        <div className="flex flex-col gap-3.5 pl-[13px] w-full max-w-sm">
          {cities.map((city, index) => (
            <div key={index} className="flex items-center text-[13px]">
              <div className="flex items-center gap-2 w-[140px] text-gray-800 font-medium">
                <MapPin className="w-3.5 h-3.5 text-gray-400 stroke-[1.5]" />
                <span>{city.name}</span>
              </div>
              <div className="text-gray-500 font-normal">
                {city.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}