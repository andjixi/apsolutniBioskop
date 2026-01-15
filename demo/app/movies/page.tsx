"use client"

import Link from "next/link"
import Image from "next/image"
import { movies } from "@/lib/data"
import { Film, ArrowLeft, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function MoviesPage() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-zinc-950 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Film className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">ApsolutniBioskop</span>
          </Link>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent gap-2">
                  <User className="h-4 w-4" />
                  {user.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                <DropdownMenuItem onClick={logout} className="text-zinc-300 focus:bg-zinc-800 focus:text-white cursor-pointer">
                  <LogOut className="h-4 w-4 mr-2" />
                  Odjavi se
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="outline" size="sm" className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent">
                Prijava
              </Button>
            </Link>
          )}
        </div>

        <Link href="/">
          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white mb-4 hover:bg-zinc-900">
            <ArrowLeft className="h-4 w-4 mr-1" /> Nazad
          </Button>
        </Link>

        <h1 className="text-2xl font-bold text-white mb-6">Trenutno u bioskopu</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-red-500 transition-colors">
                <div className="relative aspect-[2/3]">
                  <Image src={movie.poster || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-white truncate">{movie.title}</h3>
                  <p className="text-sm text-zinc-400">
                    {movie.genre} • {movie.duration} min
                  </p>
                  <p className="text-sm text-red-500 mt-1">Od {movie.showtimes[0].price} RSD</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
