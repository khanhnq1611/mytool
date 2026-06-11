import { notFound } from "next/navigation";
import Link from "next/link";
import { Download, Calendar, HardDrive, Monitor, ExternalLink } from "lucide-react";
import software from "@/data/software.json";
import categories from "@/data/categories.json";
import Breadcrumb from "@/components/Breadcrumb";
import Rating from "@/components/Rating";
import TagBadge from "@/components/TagBadge";
import SoftwareCard from "@/components/SoftwareCard";
import { formatDownloads, formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return software.map((s) => ({ slug: s.slug }));
}

export default function SoftwarePage({
  params,
}: {
  params: { slug: string };
}) {
  const item = software.find((s) => s.slug === params.slug);
  if (!item) return notFound();

  const category = categories.find((c) => c.slug === item.category);
  const subcategory = category?.subcategories.find(
    (s) => s.slug === item.subcategory
  );

  const related = software
    .filter((s) => s.category === item.category && s.slug !== item.slug)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: category?.name || "", href: `/category/${item.category}` },
          { label: subcategory?.name || "", href: `/category/${item.category}` },
          { label: item.name },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        {/* Main content */}
        <div>
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src={`/icons/${item.slug}.svg`}
              alt={item.name}
              className="w-20 h-20 rounded-xl shrink-0"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{item.name}</h1>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                <span>Version {item.version}</span>
                <span>&middot;</span>
                <span>{item.size}</span>
                <span>&middot;</span>
                <span>{item.platform}</span>
              </div>
              <div className="mt-2">
                <Rating value={item.rating} />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="font-bold text-gray-900 mb-3">Mô tả</h2>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>

          {/* Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="font-bold text-gray-900 mb-3">Chi tiết</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>Cập nhật: {formatDate(item.updatedAt)}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <HardDrive className="w-4 h-4 text-gray-400" />
                <span>Dung lượng: {item.size}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Monitor className="w-4 h-4 text-gray-400" />
                <span>Nền tảng: {item.platform}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Download className="w-4 h-4 text-gray-400" />
                <span>Lượt tải: {formatDownloads(item.downloads)}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-900 mb-3">Thẻ</h2>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          </div>

          {/* Related software */}
          {related.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-900 mb-4">Phần mềm liên quan</h2>
              <div className="grid gap-3">
                {related.map((s) => (
                  <SoftwareCard key={s.slug} software={s} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar: Download CTA */}
        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-28">
            <a
              href={`/api/download/${item.slug}`}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-download-green text-white font-bold text-lg hover:bg-download-green-dark transition-colors"
            >
              <Download className="w-5 h-5" />
              Tải miễn phí
            </a>
            <div className="mt-3 text-center text-sm text-gray-500">
              Version {item.version} &middot; {item.size}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Tổng lượt tải</span>
                <span className="font-medium">{item.downloads.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Đánh giá</span>
                <span className="font-medium">{item.rating}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Giấy phép</span>
                <span className="font-medium">Miễn phí</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Nền tảng</span>
                <span className="font-medium">{item.platform}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
