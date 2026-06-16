interface HiddenGemsProps {
  onBack: () => void;
}

export default function HiddenGems({ onBack }: HiddenGemsProps) {
  return (
    <div className="w-full h-full flex flex-col justify-start animate-fadeIn text-gray-800">
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
        Quiet, Elegant Escapes
      </h2>

      <div className="flex flex-col gap-8 pr-2">
        {/* Section 1 */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2 mb-2">
            <span className="text-[#1E6762] font-normal">|</span> Musée Rodin Gardens (Underrated Serenity)
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-[13px] text-gray-600 leading-relaxed">
            <li>Less crowded than Louvre, but visually stunning</li>
            <li>Sculptures like The Thinker placed in manicured gardens</li>
            <li>Ideal for slow luxury: champagne picnic + art</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2 mb-2">
            <span className="text-[#1E6762] font-normal">|</span> Parc Monceau (Local Elite Vibe)
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-[13px] text-gray-600 leading-relaxed">
            <li>Favored by affluent locals, not tourists</li>
            <li>Roman columns, statues, quiet corners</li>
            <li>Best for: morning walks or editorial-style photoshoots</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2 mb-2">
            <span className="text-[#1E6762] font-normal">|</span> Hidden Cultural Spaces
          </h3>
          
          <div className="mt-3 ml-3">
            <h4 className="text-[14px] font-medium text-gray-900 mb-1">
              Musée Jacquemart-André (Private Mansion Museum)
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-[13px] text-gray-600 leading-relaxed mb-4">
              <li>Feels like stepping into a billionaire's home</li>
              <li>Bonus: refined café inside (often overlooked)</li>
              <li>Luxury angle: private guided tour</li>
            </ul>

            <h4 className="text-[14px] font-medium text-gray-900 mb-1">
              Sainte-Chapelle (Timed Right = Magical)
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-[13px] text-gray-600 leading-relaxed">
              <li>Not "unknown," but timing makes it exclusive</li>
              <li>Go early morning or during classical concerts</li>
              <li>360° stained glass immersion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}