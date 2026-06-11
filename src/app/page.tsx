import Link from "next/link";
import { ArrowRight, Download, Sparkles, Clock } from "lucide-react";
import software from "@/data/software.json";
import categories from "@/data/categories.json";
import TopDownloads from "@/components/TopDownloads";
import SoftwareCard from "@/components/SoftwareCard";
import Sidebar from "@/components/Sidebar";

export default function HomePage() {
  const featured = software.filter((s) => s.featured).slice(0, 4);
  const topByDownloads = [...software]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 5);
  const recentlyUpdated = [...software]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 6);
  const top15 = [...software]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 15);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Hero spotlight */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-dark to-dark-lighter rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Nổi bật</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Tải phần mềm miễn phí
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mb-4">
            Bộ sưu tập phần mềm miễn phí tốt nhất cho Windows, Mac, Linux và
            Android. Công cụ bảo mật, tiện ích lập trình và phần mềm năng suất
            — tất cả đều đã được kiểm tra và an toàn để tải xuống.
          </p>
          <div className="flex flex-wrap gap-3">
            {featured.map((s) => (
              <Link
                key={s.slug}
                href={`/software/${s.slug}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 transition-colors"
              >
                <img
                  src={`/icons/${s.slug}.svg`}
                  alt={s.name}
                  className="w-8 h-8 rounded"
                />
                <div>
                  <div className="text-sm font-medium">{s.name}</div>
                  <div className="text-xs text-gray-400">v{s.version}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Downloads */}
      <section className="mb-8">
        <TopDownloads items={topByDownloads} />
      </section>

      {/* Main content + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-8">
          {/* Recently Updated */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <Clock className="w-5 h-5 text-primary" />
                Mới cập nhật
              </h2>
            </div>
            <div className="grid gap-3">
              {recentlyUpdated.map((s) => (
                <SoftwareCard key={s.slug} software={s} />
              ))}
            </div>
          </section>

          {/* Newly Released */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <Sparkles className="w-5 h-5 text-primary" />
                Mới phát hành
              </h2>
            </div>
            <div className="grid gap-3">
              {software.slice(5, 9).map((s) => (
                <SoftwareCard key={s.slug} software={s} />
              ))}
            </div>
          </section>

          {/* All Software */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                Tất cả phần mềm ({software.length})
              </h2>
              <span className="text-sm text-gray-500">Sắp xếp theo lượt tải</span>
            </div>
            <div className="grid gap-3">
              {software.map((s) => (
                <SoftwareCard key={s.slug} software={s} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <Sidebar categories={categories} topDownloads={top15} />
      </div>
    </div>
  );
}
