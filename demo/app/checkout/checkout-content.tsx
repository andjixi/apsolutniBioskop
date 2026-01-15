"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { getMovie, getShowtime, currentUser, POINTS_PER_RSD, POINTS_EARNED_PER_100_RSD } from "@/lib/data"
import { Film, CheckCircle, XCircle, Ticket, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function CheckoutContent() {
  const searchParams = useSearchParams()
  const movieId = searchParams.get("movie") || ""
  const showtimeId = searchParams.get("showtime") || ""
  const seats = searchParams.get("seats")?.split(",") || []
  const type = searchParams.get("type") as "purchase" | "reservation"

  const [status, setStatus] = useState<"form" | "processing" | "success" | "failed">("form")
  const [usePoints, setUsePoints] = useState(false)
  const [pointsUsed, setPointsUsed] = useState(0)
  const [earnedPoints, setEarnedPoints] = useState(0)

  const movie = getMovie(movieId)
  const showtime = getShowtime(movieId, showtimeId)

  if (!movie || !showtime || seats.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white mb-4">Neispravna rezervacija</p>
          <Link href="/movies">
            <Button className="bg-red-600 hover:bg-red-700">Nazad na filmove</Button>
          </Link>
        </div>
      </div>
    )
  }

  const subtotal = seats.length * showtime.price
  const maxDiscount = Math.floor(currentUser.bonusPoints / POINTS_PER_RSD)
  const discount = usePoints ? Math.min(maxDiscount, subtotal) : 0
  const total = subtotal - discount
  const isPurchase = type === "purchase"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("processing")

    setTimeout(() => {
      const success = Math.random() > 0.2

      if (success || !isPurchase) {
        if (isPurchase) {
          setPointsUsed(discount * POINTS_PER_RSD)
          setEarnedPoints(Math.floor((total / 100) * POINTS_EARNED_PER_100_RSD))
        }
        setStatus("success")
      } else {
        setStatus("failed")
      }
    }, 1500)
  }

  if (status === "failed") {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="text-center max-w-sm">
          <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Plaćanje nije uspelo</h1>
          <p className="text-zinc-400 mb-6">Vaše plaćanje nije moglo biti obrađeno. Molimo pokušajte ponovo ili otkažite.</p>
          <div className="flex gap-3">
            <Button onClick={() => setStatus("form")} className="flex-1 bg-red-600 hover:bg-red-700">
              Pokušaj ponovo
            </Button>
            <Link href="/movies" className="flex-1">
              <Button
                variant="outline"
                className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent"
              >
                Otkaži
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (status === "processing") {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white">{isPurchase ? "Obrada plaćanja..." : "Potvrđivanje rezervacije..."}</p>
        </div>
      </div>
    )
  }

  if (status === "success") {
    const ticketCode = `TKT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`

    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="text-center max-w-sm w-full">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">
            {isPurchase ? "Kupovina završena!" : "Rezervacija potvrđena!"}
          </h1>
          <p className="text-zinc-400 mb-6">
            {isPurchase
              ? "Vaša e-karta je poslata na vašu e-poštu."
              : "Molimo dođite 30 minuta ranije da platite na blagajni."}
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-4">
            <div className="bg-red-600 p-3 flex items-center justify-center gap-2">
              <Ticket className="h-5 w-5" />
              <span className="font-bold text-white">{isPurchase ? "E-KARTA" : "REZERVACIJA"}</span>
            </div>
            <div className="p-4 text-left">
              <p className="text-white font-bold text-lg">{movie.title}</p>
              <p className="text-zinc-400 text-sm">
                {showtime.date} • {showtime.time}
              </p>
              <p className="text-zinc-400 text-sm">{showtime.hall}</p>
              <div className="border-t border-dashed border-zinc-700 my-3" />
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Sedišta</span>
                <span className="text-white font-medium">{seats.sort().join(", ")}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-zinc-400">Ukupno</span>
                <span className="text-red-500 font-bold">{total} RSD</span>
              </div>
              <div className="border-t border-dashed border-zinc-700 my-3" />
              <div className="text-center">
                <p className="text-zinc-500 text-xs">Kod karte</p>
                <p className="text-white font-mono text-lg">{ticketCode}</p>
              </div>
            </div>
          </div>

          {isPurchase && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 mb-4 text-sm">
              <div className="flex items-center gap-2 text-yellow-500 mb-2">
                <Star className="h-4 w-4" />
                <span className="font-medium">Bonus poeni</span>
              </div>
              {pointsUsed > 0 && (
                <p className="text-zinc-400">
                  Iskorišćeno poena: <span className="text-red-400">-{pointsUsed}</span>
                </p>
              )}
              <p className="text-zinc-400">
                Zarađeno poena: <span className="text-green-400">+{earnedPoints}</span>
              </p>
              <p className="text-zinc-300 mt-1">
                Novo stanje: {currentUser.bonusPoints - pointsUsed + earnedPoints} poena
              </p>
            </div>
          )}

          <Link href="/">
            <Button className="w-full bg-red-600 hover:bg-red-700">Nazad na početnu</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-4">
      <div className="max-w-sm mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Film className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">ApsolutniBioskop</span>
          </Link>
        </div>

        <h1 className="text-xl font-bold text-white mb-6">
          {isPurchase ? "Završite kupovinu" : "Završite rezervaciju"}
        </h1>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 text-sm">
          <p className="text-white font-semibold">{movie.title}</p>
          <p className="text-zinc-400">
            {showtime.date} • {showtime.time}
          </p>
          <p className="text-zinc-400">Sedišta: {seats.sort().join(", ")}</p>
          <div className="border-t border-zinc-800 mt-3 pt-3 space-y-1">
            <div className="flex justify-between">
              <span className="text-zinc-400">Međuzbir</span>
              <span className="text-white">{subtotal} RSD</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-500">
                <span>Popust od poena</span>
                <span>-{discount} RSD</span>
              </div>
            )}
            <div className="flex justify-between font-bold">
              <span className="text-white">Ukupno</span>
              <span className="text-red-500">{total} RSD</span>
            </div>
          </div>
        </div>

        {isPurchase && currentUser.bonusPoints >= POINTS_PER_RSD && (
          <div className="bg-zinc-900 border border-yellow-600/30 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 text-yellow-500 mb-2">
              <Star className="h-4 w-4" />
              <span className="font-medium text-sm">Imate {currentUser.bonusPoints} bonus poena!</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="usePoints"
                checked={usePoints}
                onCheckedChange={(checked) => setUsePoints(checked === true)}
                className="border-yellow-600 data-[state=checked]:bg-yellow-600"
              />
              <label htmlFor="usePoints" className="text-sm text-zinc-300 cursor-pointer">
                Iskoristi poene za {maxDiscount} RSD popusta
              </label>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-zinc-300">Ime</Label>
            <Input defaultValue={currentUser.name} className="bg-zinc-800 border-zinc-700 text-white mt-1" required />
          </div>
          <div>
            <Label className="text-zinc-300">E-pošta</Label>
            <Input
              type="email"
              defaultValue={currentUser.email}
              className="bg-zinc-800 border-zinc-700 text-white mt-1"
              required
            />
          </div>

          {isPurchase && (
            <>
              <div>
                <Label className="text-zinc-300">Broj kartice</Label>
                <Input
                  placeholder="1234 5678 9012 3456"
                  className="bg-zinc-800 border-zinc-700 text-white mt-1"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-zinc-300">Ističe</Label>
                  <Input placeholder="MM/GG" className="bg-zinc-800 border-zinc-700 text-white mt-1" required />
                </div>
                <div>
                  <Label className="text-zinc-300">CVV</Label>
                  <Input placeholder="123" className="bg-zinc-800 border-zinc-700 text-white mt-1" required />
                </div>
              </div>
            </>
          )}

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            {isPurchase ? `Plati ${total} RSD` : "Potvrdi rezervaciju"}
          </Button>

          <Link href={`/movies/${movieId}`}>
            <Button type="button" variant="ghost" className="w-full text-zinc-400 hover:text-white">
              Otkaži
            </Button>
          </Link>
        </form>
      </div>
    </div>
  )
}
