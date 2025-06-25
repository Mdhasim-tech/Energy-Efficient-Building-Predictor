'use client'
import { useState } from 'react'
import './PredictForm.css'

export default function PredictForm() {
    const getUnit = (key) => {
  switch (key) {
    case 'Compactness':
      return '(ratio)';
    case 'SurfaceArea':
    case 'WallArea':
    case 'RoofArea':
      return '(m²)';
    case 'Height':
      return '(m)';
    // case 'Orientation':
    //   return '(1–4)';
    case 'GlazingArea':
      return '(0.0 – 0.4)';
    // case 'GlazingDistribution':
    //   return '(0–5)';
    default:
      return '';
  }
}

  const [form, setForm] = useState({
    Compactness: '',
    SurfaceArea: '',
    WallArea: '',
    RoofArea: '',
    Height: '',
    Orientation: '',
    GlazingArea: '',
    GlazingDistribution: ''
  })

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Compactness: parseFloat(form.Compactness),
          'Surface Area': parseFloat(form.SurfaceArea),
          'Wall Area': parseFloat(form.WallArea),
          'Roof Area': parseFloat(form.RoofArea),
          Height: parseFloat(form.Height),
          Orientation: parseInt(form.Orientation),
          'Glazing Area': parseFloat(form.GlazingArea),
          'Glazing Distribution': parseInt(form.GlazingDistribution)
        })
      })

      const data = await res.json()
      setResult(data)
    } catch (error) {
      alert('Error predicting. Make sure Flask server is running.')
    }

    setLoading(false)
  }

  return (
    <div className="predict-container">
      <form onSubmit={handleSubmit}>
{Object.entries(form).map(([key, value]) => (
  <div key={key} className="form-group">
    <label>
      {key.replace(/([A-Z])/g, ' $1')}
      <span className="unit">{getUnit(key)}</span>
    </label>

    {/* Use <select> for Orientation and GlazingDistribution */}
    {key === 'Orientation' ? (
      <select name={key} value={value} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="2">North</option>
        <option value="3">East</option>
        <option value="4">South</option>
        <option value="5">West</option>
      </select>
    ) : key === 'GlazingDistribution' ? (
      <select name={key} value={value} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="0">Uniform</option>
        <option value="1">North</option>
        <option value="2">East</option>
        <option value="3">South</option>
        <option value="4">West</option>
        <option value="5">None</option>
      </select>
    ) : (
      <input
        type="number"
        name={key}
        step="any"
        value={value}
        onChange={handleChange}
        required
      />
    )}
  </div>
))}


        <button type="submit" disabled={loading}>
          {loading ? 'Predicting...' : 'Predict'}
        </button>
      </form>

      {result && (
        <div className="result">
          <h3>📊 Prediction Result</h3>
          <p><strong>Heating Load:</strong> {result.predicted_heating_load} kWh/m²</p>
          <p><strong>Cooling Load:</strong> {result.predicted_cooling_load} kWh/m²</p>
          <p><strong>Status:</strong> {result.energy_efficiency_status}</p>
        </div>
      )}
    </div>
  )
}
