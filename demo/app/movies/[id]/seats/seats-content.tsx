"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { getMovie, getShowtime } from "@/lib/data"
import { Film, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const ROWS = ["A", "B", "C", "D", "E"]
const COLS = [1, 2, 3, 4, 5, 6]
const TAKEN = ["A2", "B4", "C3", "D1", "E5"]

export default function SeatsContent({ movieId }: { movieId: string }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const showtimeId = searchParams.get("showtime") || ""

  const [selected, setSelected] = useState<string[]>([])

  const movie = getMovie(movieId)
  const showtime = getShowtime(movieId, showtimeId)

  if (!movie || !showtime) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white mb-4">Termin nije pronađen</p>
          <Link href="/movies">
            <Button className="bg-red-600 hover:bg-red-700">Nazad na filmove</Button>
          </Link>
        </div>
      </div>
    )
  }

  const toggleSeat = (seat: string) => {
    if (TAKEN.includes(seat)) return
    setSelected((prev) => (prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]))
  }

  const handleContinue = (type: "purchase" | "reservation") => {
    const params = new URLSearchParams({
      movie: movieId,
      showtime: showtimeId,
      seats: selected.join(","),
      type,
    })
    router.push(`/checkout?${params}`)
  }

  const total = selected.length * showtime.price

  return (
    <div className="min-h-screen bg-zinc-950 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Film className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">ApsolutniBioskop</span>
          </Link>
        </div>

        <Link href={`/movies/${movieId}`}>
          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white mb-4 hover:bg-zinc-900">
            <ArrowLeft className="h-4 w-4 mr-1" /> Nazad
          </Button>
        </Link>

        <div className="mb-6">
          <h1 className="text-xl font-bold text-white">{movie.title}</h1>
          <p className="text-zinc-400 text-sm">
            {showtime.date} • {showtime.time} • {showtime.hall}
          </p>
        </div>

        <div className="mb-8">
          <div className="h-2 bg-red-500 rounded-full mb-2" />
          <p className="text-center text-zinc-500 text-xs">PLATNO</p>
        </div>

        <div className="flex flex-col items-center gap-2 mb-8">
          {ROWS.map((row) => (
            <div key={row} className="flex items-center gap-2">
              <span className="text-zinc-500 text-sm w-4">{row}</span>
              {COLS.map((col) => {
                const seat = `${row}${col}`
                const isTaken = TAKEN.includes(seat)
                const isSelected = selected.includes(seat)
                return (
                  <button
                    key={seat}
                    onClick={() => toggleSeat(seat)}
                    disabled={isTaken}
                    className={`w-8 h-8 rounded text-xs font-medium transition-colors ${
                      isTaken
                        ? "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                        : isSelected
                          ? "bg-red-500 text-white"
                          : "bg-zinc-700 text-white hover:bg-zinc-600"
                    }`}
                  >
                    {col}
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-8 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-zinc-700 rounded" />
            <span className="text-zinc-400">Slobodno</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-red-500 rounded" />
            <span className="text-zinc-400">Izabrano</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-zinc-800 rounded" />
            <span className="text-zinc-400">Zauzeto</span>
          </div>
        </div>

        {selected.length > 0 && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-400">Sedišta</span>
              <span className="text-white">{selected.sort().join(", ")}</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-zinc-400">Ukupno</span>
              <span className="text-red-500 font-bold">{total} RSD</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => handleContinue("reservation")}
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent"
              >
                Rezerviši
              </Button>
              <Button onClick={() => handleContinue("purchase")} className="bg-red-600 hover:bg-red-700">
                Kupi
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
