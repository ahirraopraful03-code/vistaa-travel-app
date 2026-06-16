import { useState, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import SuggestedItinerary from "./pages/SuggestedItinerary";
import SignatureLuxury from "./pages/SignatureLuxury";
import IconicLuxury from "./pages/IconicLuxury";
import HiddenGems from "./pages/HiddenGems";
import DayTrips from "./pages/DayTrips";

import suitcaseVector from "./assets/Vector.svg";
import sparkleLogo from "./assets/Capa_1.svg";

export type FlowStep =
  | "home"
  | "signature"
  | "prompt_premium"
  | "itinerary_nights"
  | "suggested_itinerary"
  | "hidden_gems"
  | "day_trips"
  | "family_recommend";

function App() {
  const [step, setStep] = useState<FlowStep>("home");
  const [selectedNight, setSelectedNight] = useState<string | null>(null);
  const [customDays, setCustomDays] = useState<string>("");

  const nightsOptions = ["3 nights", "5 nights", "7 nights", "9 nights"];

  const handleNightSelect = (night: string) => {
    setSelectedNight(night);
    setStep("suggested_itinerary");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && customDays.trim() !== "") {
      setStep("suggested_itinerary");
    }
  };

  const renderSidebarContent = () => {
    switch (step) {
      case "home":
        return (
          <Home
            onSignatureClick={() => setStep("signature")}
            onMustDoClick={() => setStep("prompt_premium")}
            onItineraryClick={() => {
              setSelectedNight(null);
              setCustomDays("");
              setStep("itinerary_nights");
            }}
            onQuietClick={() => setStep("hidden_gems")}
            onDayTripsClick={() => setStep("day_trips")}
            onFamilyRecommendClick={() => setStep("family_recommend")}
          />
        );
      case "signature":
        return (
          <div className="flex flex-col h-full justify-between animate-fadeIn">
            <div className="mb-5 mt-1">
              <h2 className="text-gray-950 text-[15px] font-medium mb-1">Hi there! 👋 I'm <span className="font-serif opacity-5">Vistaa</span></h2>
              <p className="text-gray-700 text-[13px] leading-relaxed">Think of me as your travel buddy – here to help you figure out what to do and how to make the most of your trip</p>
            </div>
            <div className="w-full border-t border-gray-100 mb-6" />
            <div className="text-center w-full max-w-[260px] mx-auto mt-2">
              <p className="text-[13px] text-gray-700 font-normal mb-5">Want me to give me a Sample Itinerary</p>
              <div className="flex gap-4 px-1">
                <button onClick={() => setStep("home")} className="flex-1 bg-[#F5F5F5] hover:bg-[#1E6762] hover:text-white text-gray-700 text-sm py-2 rounded transition-all">No</button>
                <button onClick={() => setStep("suggested_itinerary")} className="flex-1 bg-[#F5F5F5] hover:bg-[#1E6762] hover:text-white text-gray-700 text-sm py-2 rounded font-normal transition-all">Yes</button>
              </div>
            </div>
            <div className="w-full flex flex-col items-center mt-auto">
              <div className="w-36 opacity-[0.04] mb-8"><img src={suitcaseVector} alt="Suitcase" className="w-full h-auto object-contain" /></div>
              <button onClick={() => setStep("home")} className="text-[#1E6762] text-[13px] font-normal hover:underline mb-1 transition-all">Return to Main Menu</button>
            </div>
          </div>
        );
      case "prompt_premium":
      case "hidden_gems":
      case "day_trips":
      case "family_recommend":
        return (
          <div className="flex flex-col h-full justify-between animate-fadeIn">
            <div className="mb-5 mt-1">
              <h2 className="text-gray-950 text-[15px] font-medium mb-1">Hi there! 👋 I'm <span className="font-serif opacity-5">Vistaa</span></h2>
              <p className="text-gray-700 text-[13px] leading-relaxed">Think of me as your travel buddy – here to help you figure out what to do and how to make the most of your trip</p>
            </div>
            <div className="w-full border-t border-gray-100 mb-6" />
            <div className="text-center w-full max-w-xs mx-auto mt-6">
              <p className="text-sm text-gray-700 font-normal mb-5">If you want, I can convert this into a premium itinerary (2–3 days).</p>
              <div className="flex gap-4 px-2">
                <button onClick={() => setStep("home")} className="flex-1 bg-[#F5F5F5] text-gray-700 text-sm py-2 rounded hover:bg-[#1E6762] hover:text-white transition-all">No</button>
                <button onClick={() => setStep("suggested_itinerary")} className="flex-1 bg-[#F5F5F5] text-gray-700 text-sm py-2 rounded font-normal hover:bg-[#1E6762] hover:text-white transition-all">Yes</button>
              </div>
            </div>
            <div className="w-full flex flex-col items-center mt-auto">
              <div className="w-36 opacity-[0.03] mb-8"><img src={suitcaseVector} alt="Suitcase" className="w-full h-auto object-contain" /></div>
              <button onClick={() => setStep("home")} className="text-[#1E6762] text-[13px] font-normal hover:underline mb-1 transition-all">Return to Main Menu</button>
            </div>
          </div>
        );
      case "itinerary_nights":
        return (
          <div className="flex flex-col h-full justify-between animate-fadeIn">
            <div className="mb-5 mt-1">
              <h2 className="text-gray-950 text-[15px] font-medium mb-1">Hi there! 👋 I'm <span className="font-serif opacity-5">Vistaa</span></h2>
              <p className="text-gray-700 text-[13px] leading-relaxed">Think of me as your travel buddy – here to help you figure out what to do and how to make the most of your trip</p>
            </div>
            <div className="w-full border-t border-gray-100 mb-6" />
            <div className="w-full flex flex-col gap-4 px-1">
              <div className="grid grid-cols-4 gap-2.5 w-full">
                {nightsOptions.map((option) => (
                  <button key={option} onClick={() => handleNightSelect(option)} className={`text-[12px] py-3.5 rounded border transition-all text-center whitespace-nowrap px-1 ${selectedNight === option ? "bg-[#1E6762] text-white border-[#1E6762] font-medium shadow-sm" : "bg-[#F8F9FA] text-gray-800 border-transparent hover:bg-[#1E6762] hover:text-white"}`}>{option}</button>
                ))}
              </div>
              <div className="w-full mt-2 relative flex items-center">
                <input type="text" placeholder="Enter no of days" value={customDays} onChange={(e) => setCustomDays(e.target.value)} onKeyDown={handleKeyDown} className="w-full bg-[#F8F9FA] border border-transparent rounded-md pl-4 pr-12 py-3.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-200 transition-all" />
                {customDays.trim() !== "" && <button onClick={() => setStep("suggested_itinerary")} className="absolute right-3 text-xs bg-[#1E6762] text-white px-2.5 py-1.5 rounded font-medium transition-all hover:bg-[#154a46]">Go</button>}
              </div>
            </div>
            <div className="w-full flex flex-col items-center mt-auto">
              <button onClick={() => setStep("home")} className="text-[#1E6762] text-[13px] font-normal hover:underline mb-1 transition-all">Return to Main Menu</button>
            </div>
          </div>
        );
      case "suggested_itinerary":
        return (
          <div className="flex flex-col h-full justify-between animate-fadeIn">
            <div className="mb-5 mt-1">
              <h2 className="text-gray-950 text-[15px] font-medium mb-1">Hi there! 👋 I'm <span className="font-serif opacity-5">Vistaa</span></h2>
              <p className="text-gray-700 text-[13px] leading-relaxed">Think of me as your travel buddy – here to help you figure out what to do and how to make the most of your trip</p>
            </div>
            <div className="w-full border-t border-gray-100 mb-6" />
            <div className="h-10" />
            <div className="w-full flex flex-col items-center mt-auto">
              <div className="w-36 opacity-[0.03] mb-8"><img src={suitcaseVector} alt="Suitcase" className="w-full h-auto object-contain" /></div>
              <button onClick={() => setStep("home")} className="text-[#1E6762] text-[13px] font-normal hover:underline mb-1 transition-all">Return to Main Menu</button>
            </div>
          </div>
        );
      default:
        return <button onClick={() => setStep("home")} className="text-[#1E6762] underline">Return to Main Menu</button>;
    }
  };

  return (
    <div className="h-screen w-full bg-[#F8F9FA] overflow-hidden font-sans antialiased flex flex-col justify-center">
      <div className="w-full max-w-[1280px] h-[88vh] mx-auto px-10 flex gap-6 items-stretch">
        <Sidebar>{renderSidebarContent()}</Sidebar>

        <div className="w-[45%] h-full bg-white rounded-lg border border-gray-100 flex flex-col items-center justify-center p-10 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              {step === "home" && (
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">What to Do</h1>
                  <p className="text-sm text-gray-500 font-normal mb-10">Must-Dos, Itineraries & More</p>
                  <div className="w-44"><img src={suitcaseVector} alt="Suitcase" className="w-full h-auto object-contain" /></div>
                </div>
              )}
              {step === "itinerary_nights" && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="w-[144px]"><img src={sparkleLogo} alt="Premium" /></div>
                </div>
              )}
              {step === "signature" && <SignatureLuxury onBack={() => setStep("home")} />}
              {step === "prompt_premium" && <IconicLuxury onNext={() => setStep("suggested_itinerary")} />}
              {step === "hidden_gems" && <HiddenGems onBack={() => setStep("home")} />}
              {step === "suggested_itinerary" && <SuggestedItinerary onBack={() => setStep("home")} />}
              {step === "day_trips" && <DayTrips onNext={() => setStep("suggested_itinerary")} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;