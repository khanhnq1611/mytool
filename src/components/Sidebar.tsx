import Link from "next/link";
import { Download, Shield, Code, Wrench, Globe, Play, Network, FileText } from "lucide-react";
import { formatDownloads } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Shield, Code, Wrench, Globe, Play, Network, FileText,
};

interface Category {
  name: string;
  slug: string;
  icon: string;
  subcategories: { name: string; slug: string; count: number }[];
}

interface Software {
  name: string;
  slug: string;
  downloads: number;
}

export default function Sidebar({
  categories,
  topDownloads,
  activeCategory,
}: {
  categories: Category[];
  topDownloads: Software[];
  activeCategory?: string;
}) {
  return (
    <aside className="space-y-6">
      {/* Category nav */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <h3 className="bg-dark text-white text-sm font-bold px-4 py-2.5">
          Danh mục
        </h3>
        <div className="divide-y divide-gray-100">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Shield;
            return (
              <div key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeCategory === cat.slug
                      ? "bg-blue-50 text-primary"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </Link>
                <div className="bg-gray-50">
                  {cat.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/category/${cat.slug}`}
                      className="flex items-center justify-between px-6 py-1.5 text-xs text-gray-600 hover:text-primary hover:bg-blue-50/50 transition-colors"
                    >
                      <span>{sub.name}</span>
                      <span className="text-gray-400">({sub.count})</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top downloads widget */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <h3 className="bg-dark text-white text-sm font-bold px-4 py-2.5">
          Tải nhiều nhất
        </h3>
        <ol className="divide-y divide-gray-100">
          {topDownloads.map((item, i) => (
            <li key={item.slug}>
              <Link
                href={`/software/${item.slug}`}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    i < 3
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700 truncate flex-1">
                  {item.name}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-0.5">
                  <Download className="w-3 h-3" />
                  {formatDownloads(item.downloads)}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
