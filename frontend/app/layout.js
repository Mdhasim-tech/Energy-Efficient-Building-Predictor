// app/layout.jsx
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

export const metadata = {
  title: 'Energy Efficiency Predictor',
  description: 'Predict heating & cooling load and evaluate energy efficiency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
