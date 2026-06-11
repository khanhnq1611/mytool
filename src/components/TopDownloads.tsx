import Link from "next/link";
import { Download, TrendingUp } from "lucide-react";
import { formatDownloads } from "@/lib/utils";

interface Software {
  name: string;
  slug: string;
  downloads: number;
  category: string;
  version: string;
}

export default function TopDownloads({ items }: { items: Software[] }) {
  return (
    <section>
      <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        Tải nhiều nhất
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {items.map((item, i) => {
          return (
            <Link
              key={item.slug}
              href={`/software/${item.slug}`}
              className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition-shadow text-center"
            >
              <img
                src={`/icons/${item.slug}.svg`}
                alt={item.name}
                className="w-12 h-12 rounded-lg mx-auto"
              />
              <div className="mt-2 font-semibold text-sm text-gray-900 truncate">
                {item.name}
              </div>
              <div className="text-xs text-gray-500">v{item.version}</div>
              <div className="mt-1 flex items-center justify-center gap-1 text-xs text-gray-400">
                <Download className="w-3 h-3" />
                {formatDownloads(item.downloads)}
              </div>
              <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded bg-download-green text-white text-xs font-medium">
                <Download className="w-3 h-3" />
                Tải về
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
