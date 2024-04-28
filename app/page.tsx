"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Shuffle } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  const [fetched, setFetched] = useState(false);
  const [fact, setFact] = useState('');

  const fetchQuote = async () => {
    const res = await (await fetch("/api/fod")).json()

    setFact(res)
    setFetched(true);
  }

  const fetchRandomQuote = async () => {
    const res = await (await fetch("/api/random")).json()

    setFact(res)
  }

  useEffect(() => {
    if (!fetched)
      fetchQuote()
  }, [fetched])

  return (
    <main className="flex items-center px-3 py-4 flex-grow">
      <div className="flex flex-col items-center justify-center h-full">

        <h1 className="text-2xl leading-tight font-bold p-4 text-transparent bg-clip-text inline-block bg-gradient-to-br from-blue-600 via-purple-400 to-red-600">Random fact of the day</h1>

        <Card className="max-w-xl p-1">
          <CardContent className="py-6">
            <blockquote className=" border-l-2 pl-6 italic">
              {fetched ? (
                <p className="font-semibold text-lg">{fact}</p>
              ) : (
                <div className="space-y-3">
                  <Skeleton className="h-4 rounded-lg w-[250px]" />
                  <Skeleton className="h-4 rounded-lg w-[250px]" />
                  <Skeleton className="h-4 rounded-lg w-[250px]" />
                </div>
              )}
            </blockquote>
          </CardContent>
          <CardFooter className="flex flex-row-reverse">
            <Button className="px-6 font-bold text-base" variant={"expandIcon"} Icon={Shuffle} iconPlacement={"right"} onClick={fetchRandomQuote}>Shuffle !</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
