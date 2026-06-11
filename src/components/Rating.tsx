import { Star } from "lucide-react";

export default function Rating({ value }: { value: number }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.3;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalf && (
        <div className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-gray-300" />
          <div className="absolute overflow-hidden w-2 h-4">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} className="w-4 h-4 text-gray-300" />
      ))}
      <span className="ml-1 text-sm text-gray-500">{value.toFixed(1)}</span>
    </div>
  );
}
