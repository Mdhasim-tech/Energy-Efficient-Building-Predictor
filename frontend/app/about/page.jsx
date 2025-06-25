// app/about/page.jsx
import './page.css'

export default function About() {
  return (
    <div className="about-container">
      <h1>📘 About the Energy Efficiency Predictor</h1>

      <section>
        <h2>🔍 What does this app do?</h2>
        <p>
          This web application predicts the <strong>Heating Load</strong> and <strong>Cooling Load</strong> of a building based on its architectural parameters.
          It helps architects and energy engineers estimate how energy efficient a design is — instantly.
        </p>
      </section>

      <section>
        <h2>📊 Dataset</h2>
        <p>
          The model is trained on the <a href="https://archive.ics.uci.edu/ml/datasets/Energy+efficiency" target="_blank">UCI Energy Efficiency Dataset</a>,
          which includes 768 building design samples with 8 input features and 2 target outputs:
        </p>
        <ul>
          <li><strong>y1:</strong> Heating Load (kWh/m²)</li>
          <li><strong>y2:</strong> Cooling Load (kWh/m²)</li>
        </ul>
      </section>

      <section>
        <h2>🧠 Model Details</h2>
        <p>
          We use a <strong>Decision Tree Regressor</strong> trained on the dataset to predict both targets. It learns the relationships between building features like compactness, glazing, and surface area to predict energy demand.
        </p>
      </section>

      <section>
        <h2>📈 Model Accuracy</h2>
        <ul>
          <li><strong>R² Score (Heating Load):</strong> 0.95</li>
          <li><strong>R² Score (Cooling Load):</strong> 0.93</li>
          <li><strong>Mean Absolute Error:</strong> ~1.5 kWh/m²</li>
        </ul>
        <p>The model performs with high accuracy and is suitable for energy benchmarking and early-stage design evaluation.</p>
      </section>

      <section>
        <h2>🚦 Energy Efficiency Evaluation</h2>
        <p>
          Based on the predicted heating and cooling load values, the app classifies your design as:
        </p>
        <ul>
          <li><strong>Energy Efficient</strong> — if Heating ≤ 15 and Cooling ≤ 20 kWh/m²</li>
          <li><strong>Needs Improvement</strong> — otherwise</li>
        </ul>
      </section>

      <section>
        <h2>🛠️ Tech Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> Next.js (React), Plain CSS</li>
          <li><strong>Backend:</strong> Flask API (Python)</li>
          <li><strong>Model:</strong> Scikit-Learn (DecisionTreeRegressor)</li>
        </ul>
      </section>
    </div>
  )
}
