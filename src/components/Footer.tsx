import Link from "next/link";
import { Shield, Code, Wrench, Globe, Play, Network, FileText } from "lucide-react";

const categories = [
  { name: "Bảo mật", slug: "security", icon: Shield },
  { name: "Lập trình", slug: "development", icon: Code },
  { name: "Tiện ích", slug: "utilities", icon: Wrench },
  { name: "Trình duyệt", slug: "browsers", icon: Globe },
  { name: "Đa phương tiện", slug: "media", icon: Play },
  { name: "Mạng", slug: "networking", icon: Network },
  { name: "Văn phòng", slug: "office", icon: FileText },
];

const footerLinks = [
  { label: "Giới thiệu", href: "#" },
  { label: "Điều khoản sử dụng", href: "#" },
  { label: "Chính sách bảo mật", href: "#" },
  { label: "DMCA", href: "#" },
  { label: "Liên hệ", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Category directory */}
        <div className="mb-8">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Danh mục
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/favicon.svg" alt="IT Tools Hub" className="w-7 h-7 rounded-lg" />
              <span className="text-white font-bold">IT Tools Hub</span>
            </Link>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} IT Tools Hub. Bảo lưu mọi quyền.
          </p>
        </div>
      </div>
    </footer>
  );
}
