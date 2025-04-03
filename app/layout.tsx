import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blackstone Contracting - Quality Construction Services',
  description: 'Blackstone Contracting provides expert construction services for residential and multi-family projects. Our services include siding installation, window and door installation, deck rebuilding, and dry rot repairs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="pt-20">
        {children}
      </body>
    </html>
  )
}
