'use client'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogOverlay,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { AiFillLinkedin } from "react-icons/ai"
import clsx from "clsx"

export default function NewJury({ jury, className }) {
  const revealed = jury.revealed !== false
  const [hovered, setHovered] = useState(false)
  const [open, setOpen] = useState(false)


  if (!revealed) {
    return (
      <div className={clsx("flex flex-col items-center w-[8em] sm:w-[10em] md:w-[12em]", className)}>
        <div className="relative aspect-square w-full bg-muted rounded-md flex items-center justify-center text-sm text-center p-4">
          Próximamente
          <div className="absolute inset-0 bg-black/60 rounded-md flex items-center justify-center text-xs p-2 text-white text-center">
            Será revelado luego de ser publicado en nuestras redes sociales
          </div>
        </div>
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div
        className={clsx(
          "flex flex-col items-center w-[8em] sm:w-[10em] md:w-[12em] transition-transform",
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
              src={jury.imgSrc}
              alt={jury.name}
              fill
              className="object-cover rounded-md"
            />
            <div
              className={clsx(
                "absolute inset-0 bg-black bg-opacity-0 text-white p-2 flex flex-col items-center justify-center text-xs text-center",
                hovered
                  ? "bg-opacity-60 opacity-100 transition-opacity duration-300"
                  : "opacity-0 transition-opacity duration-300"
              )}
            >
  {jury.details.map((detail, idx) => (
    <p key={idx} className="mb-1">{detail}</p>
  ))}
</div>
          </div>
        </DialogTrigger>

        <p className="text-sm text-center mt-2">{jury.name}</p>
      </div>

      <DialogContent className="z-[999] bg-[#14192D] border-2 border-gray-700 rounded-md max-w-2xl max-h-[90vh] overflow-y-auto [&>button.absolute]:hidden">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-semibold">{jury.name}</DialogTitle>
          <DialogClose asChild>
            <button aria-label="Close" className="p-1 rounded bg-gray-700 hover:bg-gray-600 transition">
              <X className="h-5 w-5" />
            </button>
          </DialogClose>
        </DialogHeader>

        <div className="flex flex-col space-y-12 pt-8 text-center ">
          {jury.details && (
            <div className="flex flex-col self-center space-y-1 w-[80%]">
              {jury.details.map((detail, idx) => (
                <p key={idx} className="text-xl text-white">{detail}</p>
              ))}
            </div>
          )}

          <div className="prose prose-sm prose-invert max-w-none text-left">
            <ReactMarkdown
              components={{
                ul: ({ children }) => <ul className="list-disc pl-5 mt-2">{children}</ul>,
                li: ({ children }) => <li className="mt-1">{children}</li>,
              }}
            >
              {jury.description}
            </ReactMarkdown>
          </div>

          {jury.linkedin && (
            <div className="mt-4">
              <a href={jury.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block text-white hover:text-white/80">
                <AiFillLinkedin size={32} />
              </a>
            </div>
          )}
        </div>
      </DialogContent>

    </Dialog>
  )
}
