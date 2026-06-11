import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpDown, Download } from "lucide-react";
import software from "@/data/software.json";
import categories from "@/data/categories.json";
import Breadcrumb from "@/components/Breadcrumb";
import SoftwareCard from "@/components/SoftwareCard";
import Sidebar from "@/components/Sidebar";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  const filtered = software.filter((s) => s.category === params.slug);
  const sorted = [...filtered].sort((a, b) => b.downloads - a.downloads);
  const top15 = [...software]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 15);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumb items={[{ label: category.name }]} />

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {category.name}
          <span className="ml-2 text-base font-normal text-gray-500">
            ({filtered.length} phần mềm)
          </span>
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Duyệt và tải phần mềm {category.name.toLowerCase()} tốt nhất.
          Tất cả đều đã được kiểm tra và an toàn để tải xuống.
        </p>
      </div>

      {/* Sort controls */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm text-gray-500">Sắp xếp theo:</span>
        <button className="flex items-center gap-1 text-sm font-medium text-primary">
          <Download className="w-3.5 h-3.5" />
          Lượt tải
        </button>
        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary">
          <ArrowUpDown className="w-3.5 h-3.5" />
          Ngày cập nhật
        </button>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-3">
          {sorted.map((s) => (
            <SoftwareCard key={s.slug} software={s} />
          ))}
          {sorted.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Không tìm thấy phần mềm trong danh mục này.
            </div>
          )}
        </div>

        <Sidebar
          categories={categories}
          topDownloads={top15}
          activeCategory={params.slug}
        />
      </div>
    </div>
  );
}
