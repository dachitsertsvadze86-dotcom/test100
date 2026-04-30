"use client";
import { Part } from "../lib/types";

interface PartModalProps {
  partType: string | null;
  parts: Part[];
  onSelect: (part: Part) => void;
  onClose: () => void;
}

export default function PartModal({
  partType,
  parts,
  onSelect,
  onClose,
}: PartModalProps) {
  if (!partType || !parts || parts.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary p-6 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold capitalize">{partType} Options</h2>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Parts List */}
        <div className="p-6 space-y-4">
          {parts.map((part) => (
            <div
              key={part.id}
              className="border-2 border-gray-200 hover:border-primary rounded-xl p-4 transition-all hover:shadow-lg"
            >
              <div className="flex gap-4">
                {/* Part Image */}
                <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={part.image}
                    alt={part.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Part Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {part.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mt-2">
                      {part.price}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => onSelect(part)}
                      className="flex-1 bg-primary hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                      Select Part
                    </button>
                    <a
                      href={part.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
