import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Film } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      <Film className="h-16 w-16 text-red-500 mb-4" />
      <h1 className="text-4xl font-bold text-white mb-2">ApsolutniBioskop</h1>
      <p className="text-zinc-400 mb-8">Rezervišite karte za bioskop online</p>
      <div className="flex gap-4">
        <Link href="/movies">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Pogledaj repertoar
          </Button>
        </Link>
        <Link href="/login">
          <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent">
            Prijava
          </Button>
        </Link>
      </div>
    </div>
  )
}
