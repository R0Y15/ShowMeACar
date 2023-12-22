import './globals.css';
import { Navbar, Footer } from '@/components';

export const metadata = {
  title: 'ShowMeACar',
  description: 'Discover the Best of the Best',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
