import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Copiers Utah IT Services',
//   description: 'Alien IT is a leading IT company providing cutting-edge solutions and expert services to help businesses thrive in the digital world. Our highly skilled professionals offer tailored IT solutions, staying ahead of industry trends to deliver top-notch quality and reliability. Partner with us for transformative technology solutions and reach for the stars in the digital realm. Contact us for a free assessment.',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
