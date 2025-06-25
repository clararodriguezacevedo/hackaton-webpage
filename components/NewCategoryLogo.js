'use client'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { clsx } from "clsx"

export default function Category({ category, className }) {
  const [hovered, setHovered] = useState(false)
  const [open, setOpen] = useState(false)

  const borderColorClass = {
    CSRed: "border-cs-red",
    CSGreen: "border-cs-green",
    CSBlue: "border-cs-blue",
    CSLightOrange: "border-orange-400",
  }[category.color] || "border-gray-500"

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div
        className={clsx(
    "flex flex-col items-center w-[12em] sm:w-[14em] md:w-[18em] lg:w-[20em] transition-transform",
    className
  )}

      >
        <DialogTrigger asChild>
          <div
            className="relative aspect-square w-full cursor-pointer rounded-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={category.logo}
              alt={category.name}
              fill
              className="object-contain rounded-md"
            />
          </div>
        </DialogTrigger>
      </div>

      <DialogContent
        className={clsx(
          "z-[999] bg-[#14192D] border-2 rounded-md max-w-2xl max-h-[90vh] overflow-y-auto [&>button.absolute]:hidden",
          borderColorClass
        )}
      >
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-semibold">{category.name}</DialogTitle>
          <DialogClose asChild>
            <button
              aria-label="Close"
              className="p-1 rounded bg-gray-700 hover:bg-gray-600 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogClose>
        </DialogHeader>

        <div className="flex flex-col space-y-12 pt-8 text-center">

          <div className="prose prose-sm prose-invert max-w-none text-left">
            <ReactMarkdown
              components={{
                ul: ({ children }) => <ul className="list-disc pl-5 my-4 text-lg">{children}</ul>,
                li: ({ children }) => <li className="mt-1 text-lg">{children}</li>,
                p: ({ children }) => <p className="my-2 text-lg">{children}</p>,
              }}
            >
              {category.description}
            </ReactMarkdown>
          </div>

          <div className="flex justify-center">
            <div className="relative w-40 h-40"> 
              <Image
                src={category.logoSmall || category.logo}
                alt={category.name + " logo small"}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
