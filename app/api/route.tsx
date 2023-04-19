import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), "data");
  const localJson = await fs.readFile(jsonDirectory + "/usecase.json", "utf8");
  const jsonedResponse = JSON.parse(localJson);

  return NextResponse.json(jsonedResponse);
}
