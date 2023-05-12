import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Drex',
  description: "Welcome to Drex's Portfolio, a collection of captivating and innovative creations that demonstrate my expertise and passion in various fields. Explore a diverse range of projects, designs, and accomplishments that highlight my skills and capabilities. From graphic design to web development, photography to writing, this portfolio offers a glimpse into my professional journey and showcases the high-quality work I have produced.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
