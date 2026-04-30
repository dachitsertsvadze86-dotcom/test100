"use client";
import Image from "next/image";
import { Car, SelectedParts } from "../lib/types";

interface CarViewProps {
  car: Car | null;
  selectedParts: SelectedParts;
  onSelectPart: (partType: string) => void;
}

const CLICK_ZONES = {
  bumper: { top: "70%", left: "35%", width: "30%", height: "15%" },
  wheels: { top: "65%", left: "10%", width: "20%", height: "20%" },
  "wheels-right": { top: "65%", right: "10%", width: "20%", height: "20%" },
  hood: { top: "10%", left: "30%", width: "40%", height: "25%" },
  engine: { top: "35%", left: "35%", width: "30%", height: "25%" },
  exhaust: { top: "70%", right: "15%", width: "15%", height: "15%" },
};

export default function CarView({
  car,
  selectedParts,
  onSelectPart,
}: CarViewProps) {
  if (!car) {
    return (
      <div className="flex items-center justify-center w-full h-96 bg-gray-100 rounded-lg">
        <p className="text-gray-500 text-lg">Select a car to start customizing</p>
      </div>
    );
  }

  return (
    <div className="flex gap-8 mt-8">
      {/* Car Display */}
      <div className="flex-1">
        <div className="relative w-full bg-gradient-to-b from-blue-100 to-gray-100 rounded-lg overflow-hidden shadow-lg">
          {/* Base Car Image */}
          <div className="relative w-full h-96">
            <Image
              src={car.image}
              alt={car.name}
              fill
              priority
              className="object-contain p-4"
            />

            {/* Parts Overlay */}
            {Object.entries(selectedParts).map(([, part]) => {
              if (!part) return null;
              return (
                <div
                  key={`${part.category}-${part.id}`}
                  className="absolute inset-0"
                >
                  <Image
                    src={part.image}
                    alt={part.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              );
            })}
          </div>

          {/* Interactive Zones */}
          <button
            onClick={() => onSelectPart("bumper")}
            className="absolute bottom-12 left-1/3 w-1/4 h-12 hover:bg-red-500/20 transition-colors rounded"
            title="Click to customize Bumper"
          />
          <button
            onClick={() => onSelectPart("wheels")}
            className="absolute bottom-8 left-8 w-20 h-20 hover:bg-red-500/20 transition-colors rounded-full"
            title="Click to customize Wheels"
          />
          <button
            onClick={() => onSelectPart("wheels")}
            className="absolute bottom-8 right-8 w-20 h-20 hover:bg-red-500/20 transition-colors rounded-full"
            title="Click to customize Wheels"
          />
          <button
            onClick={() => onSelectPart("hood")}
            className="absolute top-12 left-1/3 w-1/4 h-16 hover:bg-red-500/20 transition-colors rounded"
            title="Click to customize Hood"
          />
          <button
            onClick={() => onSelectPart("engine")}
            className="absolute top-1/3 left-1/3 w-1/4 h-1/4 hover:bg-red-500/20 transition-colors rounded"
            title="Click to customize Engine"
          />
          <button
            onClick={() => onSelectPart("exhaust")}
            className="absolute bottom-16 right-16 w-16 h-12 hover:bg-red-500/20 transition-colors rounded"
            title="Click to customize Exhaust"
          />
        </div>
      </div>

      {/* Sidebar Info */}
      <div className="w-64">
        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{car.name}</h2>

          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-3">
                SELECTED PARTS
              </h3>
              {Object.keys(selectedParts).length === 0 ? (
                <p className="text-gray-400 text-sm">No parts selected yet</p>
              ) : (
                <ul className="space-y-2">
                  {Object.entries(selectedParts).map(([category, part]) => (
                    <li key={category} className="text-sm">
                      <span className="font-medium text-gray-700 capitalize">
                        {category}:
                      </span>
                      <span className="text-gray-600 ml-2">{part?.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Price Calculation */}
            <div className="border-t pt-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                TOTAL COST
              </h3>
              <p className="text-3xl font-bold text-primary">
                $
                {Object.values(selectedParts)
                  .reduce((sum, part) => sum + (part?.priceValue || 0), 0)
                  .toLocaleString()}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              // Reset logic would go here
              window.location.reload();
            }}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
