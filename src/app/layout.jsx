import './globals.css'

export const metadata = {
  title: 'Rushikesh Sakat — Frontend Developer',
  description:
    'The portfolio of Rushikesh Sakat, a frontend developer building thoughtful digital experiences.',
  icons: {
    icon: '/rs-logo.svg',
    shortcut: '/rs-logo.svg',
    apple: '/rs-logo.svg',
  },
}

export const viewport = {
  themeColor: '#f4f2ec',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
