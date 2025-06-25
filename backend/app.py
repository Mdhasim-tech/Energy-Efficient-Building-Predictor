from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Load trained model
model = joblib.load("Heating_Cooling_Load_Model.pkl")

def check_energy_efficiency(y1, y2):
    if y1 <= 15 and y2 <= 20:
        return "✅ Energy Efficient"
    elif y1 > 15 and y2 <= 20:
        return "⚠️ High Heating Load"
    elif y1 <= 15 and y2 > 20:
        return "⚠️ High Cooling Load"
    else:
        return "❌ Not Energy Efficient"

@app.route('/')
def home():
    return "🚀 Energy Efficiency Model is running!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    input_features = [
        data['Compactness'],
        data['Surface Area'],
        data['Wall Area'],
        data['Roof Area'],
        data['Height'],
        data['Orientation'],
        data['Glazing Area'],
        data['Glazing Distribution']
    ]

    input_array = np.array([input_features])
    prediction = model.predict(input_array)[0]  # [Heating, Cooling]

    heating_load = round(prediction[0], 2)
    cooling_load = round(prediction[1], 2)
    efficiency = check_energy_efficiency(heating_load, cooling_load)

    return jsonify({
        'predicted_heating_load': heating_load,
        'predicted_cooling_load': cooling_load,
        'energy_efficiency_status': efficiency
    })

if __name__ == '__main__':
    app.run(debug=True)
