'use client';

import { useState } from 'react';
import { cars } from './data/cars';
import { parts } from './data/parts';
import CarView from './components/CarView';
import PartModal from './components/PartModal';
import CarSelector from './components/CarSelector';
import { SelectedParts, Part } from './lib/types';

export default function Home() {
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);
  const [selectedPartType, setSelectedPartType] = useState<string | null>(null);
  const [selectedParts, setSelectedParts] = useState<SelectedParts>({});

  const selectedCar = cars.find((c) => c.id === selectedCarId) || null;
  const availableParts = selectedCarId
    ? parts[selectedCarId]?.[selectedPartType] || []
    : [];

  const handleSelectPart = (part: Part) => {
    setSelectedParts((prev) => ({
      ...prev,
      [part.category]: part,
    }));
    setSelectedPartType(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-[#FF6B35] via-[#004E89] to-[#FF6B35] text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Car Customizer</h1>
          <p className="text-blue-100 text-lg">Customize your Toyota Supra with premium parts</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <CarSelector cars={cars} onSelect={setSelectedCarId} />

        {selectedCarId && selectedCar ? (
          <>
            <CarView
              car={selectedCar}
              selectedParts={selectedParts}
              onSelectPart={setSelectedPartType}
            />

            {selectedCarId && (
              <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
                {Object.keys(parts[selectedCarId] || {}).map((partType) => (
                  <button
                    key={partType}
                    onClick={() => setSelectedPartType(partType)}
                    className="bg-gradient-to-r from-[#FF6B35] to-orange-600 hover:shadow-lg text-white font-semibold py-3 px-4 rounded-lg transition-all capitalize cursor-pointer"
                  >
                    {partType}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-96 bg-white rounded-lg shadow-lg">
            <p className="text-gray-500 text-xl">Select a car to get started</p>
          </div>
        )}
      </div>

      <PartModal
        partType={selectedPartType}
        parts={availableParts}
        onSelect={handleSelectPart}
        onClose={() => setSelectedPartType(null)}
      />

      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>Car Customizer 2024. All rights reserved.</p>
          <p className="mt-2 text-sm">Made for car enthusiasts</p>
        </div>
      </footer>
    </main>
  );
}