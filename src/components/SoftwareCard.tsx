import Link from "next/link";
import { Download, Star } from "lucide-react";
import Rating from "./Rating";
import TagBadge from "./TagBadge";
import { formatDownloads } from "@/lib/utils";

interface Software {
  name: string;
  slug: string;
  version: string;
  category: string;
  subcategory: string;
  rating: number;
  downloads: number;
  description: string;
  tags: string[];
  updatedAt: string;
  size: string;
  platform: string;
}

export default function SoftwareCard({ software }: { software: Software }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {/* Icon */}
        <img
          src={`/icons/${software.slug}.svg`}
          alt={software.name}
          className="w-14 h-14 rounded-lg shrink-0"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <Link
                href={`/software/${software.slug}`}
                className="text-base font-semibold text-gray-900 hover:text-primary"
              >
                {software.name}
              </Link>
              <span className="ml-2 text-xs text-gray-400">v{software.version}</span>
            </div>
            <Rating value={software.rating} />
          </div>

          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{software.description}</p>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {software.tags.slice(0, 4).map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Download className="w-3.5 h-3.5" />
                {formatDownloads(software.downloads)}
              </span>
              <span>{software.size}</span>
              <span>{software.platform}</span>
            </div>
            <a
              href={`/api/download/${software.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-download-green text-white text-sm font-medium hover:bg-download-green-dark transition-colors"
            >
              <Download className="w-4 h-4" />
              Tải về
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
