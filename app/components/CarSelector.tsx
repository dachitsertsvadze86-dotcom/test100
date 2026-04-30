"use client";
import { Car } from "../lib/types";

interface CarSelectorProps {
  cars: Car[];
  onSelect: (carId: string) => void;
}

export default function CarSelector({ cars, onSelect }: CarSelectorProps) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Select Your Car
      </label>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="w-full max-w-xs border-2 border-gray-300 hover:border-primary focus:border-primary focus:outline-none p-3 rounded-lg text-gray-800 font-medium transition-colors"
      >
        <option value="">🚗 Choose a car...</option>
        {cars.map((car) => (
          <option key={car.id} value={car.id}>
            {car.name}
          </option>
        ))}
      </select>
    </div>
  );
}
