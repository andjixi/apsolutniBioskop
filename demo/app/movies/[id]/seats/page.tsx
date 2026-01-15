"use client"
import SeatsContent from "./seats-content"

const ROWS = ["A", "B", "C", "D", "E"]
const COLS = [1, 2, 3, 4, 5, 6]
const TAKEN = ["A2", "B4", "C3", "D1", "E5"]

export default async function SeatsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return <SeatsContent movieId={id} />
}
