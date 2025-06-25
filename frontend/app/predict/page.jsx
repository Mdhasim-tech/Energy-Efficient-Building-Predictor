// app/predict/page.jsx
"use client"
import PredictForm from '../components/PredictForm/PredictForm'

export default function PredictPage() {
  return (
    <main>
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>🧠 Predict Energy Efficiency</h2>
      <PredictForm />
    </main>
  )
}
