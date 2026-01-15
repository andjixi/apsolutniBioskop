"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Film } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const name = email.split("@")[0]
    login(name, email)
    router.push("/movies")
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white">
            <Film className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold">ApsolutniBioskop</span>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Prijava</h2>

          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-zinc-300">
                E-pošta
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-zinc-300">
                Lozinka
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white mt-1"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full mt-6 bg-red-600 hover:bg-red-700">
            Prijavi se
          </Button>

          <p className="text-center text-zinc-400 text-sm mt-4">
            Nemate nalog?{" "}
            <Link href="/register" className="text-red-500 hover:underline">
              Registrujte se
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
