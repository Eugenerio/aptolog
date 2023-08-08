
import '@/app/globals.css'
import { Figtree } from 'next/font/google';


const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Aptolog',
  description: 'Aptos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
            {children}
      </body>
    </html>
  )
}
