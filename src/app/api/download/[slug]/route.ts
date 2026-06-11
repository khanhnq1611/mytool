import { NextRequest, NextResponse } from "next/server";
import { readFile, stat } from "fs/promises";
import { join } from "path";
import software from "@/data/software.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const item = software.find((s) => s.slug === params.slug);
  if (!item) {
    return NextResponse.json({ error: "Software not found" }, { status: 404 });
  }

  // Map slug to filename — each software has a corresponding file in public/downloads/
  const fileName = (item as any).fileName || `${params.slug}.zip`;
  const filePath = join(process.cwd(), "public", "downloads", fileName);

  try {
    const fileStat = await stat(filePath);
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Length": fileStat.size.toString(),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "File not found on server. Please upload it to public/downloads/" },
      { status: 404 }
    );
  }
}
