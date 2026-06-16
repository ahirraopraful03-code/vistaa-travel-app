import { useState } from "react";

interface HomeProps {
  onSignatureClick: () => void;
  onMustDoClick: () => void;
  onItineraryClick: () => void;
  onQuietClick: () => void;
  onDayTripsClick: () => void;
  onFamilyRecommendClick: () => void;
}

export default function Home({
  onSignatureClick,
  onMustDoClick,
  onItineraryClick,
  onQuietClick,
  onDayTripsClick,
  onFamilyRecommendClick,
}: HomeProps) {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [selectedDest, setSelectedDest] = useState("Select your destination");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const destinations = ["Udaipur", "Jaipur", "Jodhpur", "Jaisalmer"];

  const handleButtonClick = (name: string, callback: () => void) => {
    setActiveButton(name);
    callback();
  };

  return (
    <div className="flex flex-col h-full animate-fadeIn">
      <div className="mb-5 mt-1">
        <h2 className="text-gray-950 text-[15px] font-medium mb-1">
          Hi there! 👋 I'm <span className="font-serif opacity-5">Vistaa</span>
        </h2>
        <p className="text-gray-700 text-[13px] leading-relaxed">
          Think of me as your travel buddy – here to help you figure out what to do and how to make the most of your trip
        </p>
      </div>

      <div className="w-full border-t border-gray-100 mb-5" />

      {/* Dropdown Section */}
      <p className="text-gray-500 text-xs mb-2 font-normal">Please select your Destination</p>
      <div className="relative w-full mb-5">
        <div 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full border border-gray-200 bg-[#F9F9F9] rounded px-4 py-2.5 text-sm text-gray-700 cursor-pointer flex justify-between items-center"
        >
          {selectedDest}
          <span className="text-[10px] text-gray-400">▼</span>
        </div>
        {isDropdownOpen && (
          <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded shadow-md z-20">
            {destinations.map((city) => (
              <div 
                key={city}
                onClick={() => { setSelectedDest(city); setIsDropdownOpen(false); }}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-[#1E6762] hover:text-white cursor-pointer"
              >
                {city}
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="text-gray-400 text-xs mb-3 font-normal">Select</p>

      {/* Buttons Section */}
      <div className="flex flex-col gap-3 w-full">
        <div className="grid grid-cols-3 gap-3">
          <button onClick={() => handleButtonClick("sig", onSignatureClick)} className={`text-[12px] font-normal rounded p-3 text-left min-h-[54px] flex items-center ${activeButton === "sig" ? "bg-[#1E6762] text-white" : "bg-[#F5F5F5] text-gray-700"}`}>Signature experiences</button>
          <button onClick={() => handleButtonClick("must", onMustDoClick)} className={`text-[12px] font-normal rounded p-3 text-left min-h-[54px] flex items-center ${activeButton === "must" ? "bg-[#1E6762] text-white" : "bg-[#F5F5F5] text-gray-700"}`}>Must do things</button>
          <button onClick={() => handleButtonClick("itin", onItineraryClick)} className={`text-[12px] font-normal rounded p-3 text-left min-h-[54px] flex items-center ${activeButton === "itin" ? "bg-[#1E6762] text-white" : "bg-[#F5F5F5] text-gray-700"}`}>Sample itineraries</button>
        </div>

        <div className="grid grid-cols-2 gap-3 pr-[15%]">
          <button onClick={() => handleButtonClick("quiet", onQuietClick)} className={`text-[12px] font-normal rounded p-3 text-left min-h-[54px] flex items-center ${activeButton === "quiet" ? "bg-[#1E6762] text-white" : "bg-[#F5F5F5] text-gray-700"}`}>Hidden gems/offbeat things</button>
          <button onClick={() => handleButtonClick("day", onDayTripsClick)} className={`text-[12px] font-normal rounded p-3 text-left min-h-[54px] flex items-center ${activeButton === "day" ? "bg-[#1E6762] text-white" : "bg-[#F5F5F5] text-gray-700"}`}>Day trips from the city</button>
        </div>

        <div className="flex justify-start">
          <button onClick={() => handleButtonClick("fam", onFamilyRecommendClick)} className={`text-[12px] font-normal rounded p-3 text-left min-h-[54px] w-[45%] flex items-center ${activeButton === "fam" ? "bg-[#1E6762] text-white" : "bg-[#F5F5F5] text-gray-700"}`}>Recommended by friends and family</button>
        </div>
      </div>
    </div>
  );
}