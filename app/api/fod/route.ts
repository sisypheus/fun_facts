import { db } from "@/db";
import { facts, displayed_facts } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { updateFod } from "../utils/update";

export async function GET() {
  try {
    const factRes = db
      .select({ content: facts.content })
      .from(facts)
      .innerJoin(displayed_facts, eq(facts.id, displayed_facts.fact_id))
      .limit(1)
      .get();

    let content = '';

    if (!factRes || !factRes.content) {
      const updateResult = updateFod();
      content = updateResult?.content ?? "Something went wrong, probably my bad 😮‍💨" as string;
    } else
      content = factRes.content;
      console.log(content)

    return Response.json(content);
  } catch (error) {
    console.error('Error fetching fact:', error);
    return Response.json("Something went wrong, probably my bad 😮‍💨");
  }
}