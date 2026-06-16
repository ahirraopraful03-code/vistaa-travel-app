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
          <div className="flex flex-col h-full justify-between animate-fadeIn p-4">
            <div className="mb-5 mt-1">
              <h2 className="text-gray-950 text-lg font-medium mb-1">Hi there! 👋 I'm <span className="font-serif">Vistaa</span></h2>
              <p className="text-gray-700 text-sm leading-relaxed">Think of me as your travel buddy – here to help you figure out what to do.</p>
            </div>
            <div className="w-full border-t border-gray-100 mb-6" />
            <div className="text-center w-full max-w-[260px] mx-auto mt-2">
              <p className="text-sm text-gray-700 font-normal mb-5">Want me to give a Sample Itinerary?</p>
              <div className="flex gap-4">
                <button onClick={() => setStep("home")} className="flex-1 bg-[#F5F5F5] hover:bg-[#1E6762] hover:text-white text-gray-700 text-sm py-2 rounded transition-all">No</button>
                <button onClick={() => setStep("suggested_itinerary")} className="flex-1 bg-[#F5F5F5] hover:bg-[#1E6762] hover:text-white text-gray-700 text-sm py-2 rounded transition-all">Yes</button>
              </div>
            </div>
            <div className="w-full flex flex-col items-center mt-10">
              <button onClick={() => setStep("home")} className="text-[#1E6762] text-sm hover:underline">Return to Main Menu</button>
            </div>
          </div>
        );
      case "itinerary_nights":
        return (
          <div className="flex flex-col h-full justify-between animate-fadeIn p-4">
            <div className="mb-5 mt-1">
              <h2 className="text-gray-950 text-lg font-medium mb-1">How long is your trip?</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {nightsOptions.map((n) => (
                <button key={n} onClick={() => handleNightSelect(n)} className="p-3 bg-gray-50 rounded hover:bg-[#1E6762] hover:text-white transition-all text-sm">{n}</button>
              ))}
            </div>
            <input type="text" placeholder="Custom days..." value={customDays} onChange={(e) => setCustomDays(e.target.value)} onKeyDown={handleKeyDown} className="mt-4 p-3 border rounded w-full text-sm" />
          </div>
        );
      default:
        return <button onClick={() => setStep("home")} className="text-[#1E6762] underline">Return to Main Menu</button>;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F9FA] p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-[1200px] min-h-[80vh] flex flex-col lg:flex-row gap-6 bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Sidebar Container */}
        <div className="w-full lg:w-[40%] p-6 border-b lg:border-b-0 lg:border-r border-gray-100">
          <Sidebar>{renderSidebarContent()}</Sidebar>
        </div>

        {/* Right Content Area */}
        <div className="w-full lg:w-[60%] p-6 md:p-10 flex flex-col items-center justify-center overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col items-center justify-center text-center"
            >
              {step === "home" && (
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">What to Do</h1>
                  <p className="text-sm text-gray-500 mb-10">Must-Dos, Itineraries & More</p>
                  <img src={suitcaseVector} alt="Suitcase" className="w-32 md:w-44 h-auto" />
                </div>
              )}
              {step === "signature" && <SignatureLuxury onBack={() => setStep("home")} />}
              {step === "prompt_premium" && <IconicLuxury onNext={() => setStep("suggested_itinerary")} />}
              {step === "hidden_gems" && <HiddenGems onBack={() => setStep("home")} />}
              {step === "day_trips" && <DayTrips onNext={() => setStep("suggested_itinerary")} />}
              {step === "suggested_itinerary" && <SuggestedItinerary onBack={() => setStep("home")} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;