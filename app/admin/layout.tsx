import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Administração - CELL FIX BRASIL",
  description: "Painel administrativo para gerenciamento de imagens",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
