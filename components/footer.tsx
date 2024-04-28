import * as React from "react"

import { cn } from "@/lib/utils"
import { LucideLightbulb } from "lucide-react"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={"https://github.com/sisypheus"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              T.O
            </a>
            . Hosted on{" "}
            <a
              href="https://www.hetzner.com/cloud/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Hetzner
            </a>
            . Icons by{" "}
            <a
              href="https://lucide.dev/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Lucide
            </a>
            . The source code is available on{" "}
            <a
              href={"https://github.com/sisypheus/fun_facts"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}