import './globals.css'

export const metadata = {
  title: 'Natours | Next JS',
  description: 'Exciting tours our adventurous people',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
