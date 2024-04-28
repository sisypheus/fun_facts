"use client"

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Skeleton } from "@nextui-org/react";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [fetched, setFetched] = useState(false);
  const [fact, setFact] = useState('');

  const fetchQuote = async () => {
    const res = await (await fetch("/api/facts")).json()

    setFact(res?.content)
    setFetched(true);
  }

  useEffect(() => {
    if (fetched)
      return;

    fetchQuote()
  }, [fetched])

  return (
    <main className="flex flex-col items-center px-3">
      <Card className="max-w-xl">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-lg leading-tight font-semibold">Random fact of the day</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <blockquote className="p-4 border-l-2 pl-6 italic">
            {fetched ? (
              fact
            ) : (
              <Skeleton className="h-4 rounded-lg w-full" isLoaded={fetched}>
              </Skeleton>
            )}
          </blockquote>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/sisypheus/fun_facts"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
