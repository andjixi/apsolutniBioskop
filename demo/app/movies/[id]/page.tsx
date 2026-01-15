import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getMovie } from "@/lib/data"
import { Film, ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const movie = getMovie(id)

  if (!movie) notFound()

  return (
    <div className="min-h-screen bg-zinc-950 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Film className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">ApsolutniBioskop</span>
          </Link>
        </div>

        <Link href="/movies">
          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white mb-4 hover:bg-zinc-900">
            <ArrowLeft className="h-4 w-4 mr-1" /> Nazad
          </Button>
        </Link>

        <div className="flex gap-4 mb-6">
          <div className="relative w-32 aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0">
            <Image src={movie.poster || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{movie.title}</h1>
            <p className="text-zinc-400 mt-1">{movie.genre}</p>
            <div className="flex items-center gap-1 text-zinc-400 text-sm mt-2">
              <Clock className="h-4 w-4" />
              <span>{movie.duration} min</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-6">
          <p className="text-zinc-300 mb-3">{movie.description}</p>
          <div className="text-sm space-y-1">
            <p className="text-zinc-400">
              <span className="text-zinc-500">Režiser:</span> {movie.director}
            </p>
            <p className="text-zinc-400">
              <span className="text-zinc-500">Uloge:</span> {movie.cast}
            </p>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-white mb-4">Izaberite termin</h2>

        <div className="grid grid-cols-2 gap-3">
          {movie.showtimes.map((showtime) => (
            <Link key={showtime.id} href={`/movies/${movie.id}/seats?showtime=${showtime.id}`}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-red-500 transition-colors">
                <p className="text-white font-semibold">{showtime.time}</p>
                <p className="text-zinc-400 text-sm">{showtime.date}</p>
                <p className="text-zinc-400 text-sm">{showtime.hall}</p>
                <p className="text-red-500 font-semibold mt-2">{showtime.price} RSD</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
