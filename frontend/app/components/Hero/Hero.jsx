// app/components/Hero.jsx
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <h1>🏗️ Energy Efficiency Predictor</h1>
      <p>Predict Heating and Cooling Load with AI — instantly know if your design is energy efficient!</p>
      <div className="btn-wrapper">
        <a className="btn" href="/predict">Try it now</a>
      </div>
    </section>
  )
}
