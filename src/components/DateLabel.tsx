import { connection } from "next/server";
import { formatBnDate } from "@/lib/utils";

export default async function DateLabel() {
  await connection();

  return (
    <div className="text-[11px] text-gray-500">
      {formatBnDate()}
    </div>
  );
}