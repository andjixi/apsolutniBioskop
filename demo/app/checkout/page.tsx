import { Suspense } from "react"
import CheckoutContent from "./checkout-content"

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
      <CheckoutContent />
    </Suspense>
  )
}
