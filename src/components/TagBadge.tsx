import Link from "next/link";

export default function TagBadge({ tag }: { tag: string }) {
  return (
    <Link
      href={`/category/security`}
      className="inline-block px-2 py-0.5 text-xs rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
    >
      {tag}
    </Link>
  );
}
