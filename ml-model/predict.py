# from flask import Flask, request, jsonify
# import numpy as np
# import tensorflow as tf
# from preprocess import get_stock_data, preprocess_data
# from sklearn.preprocessing import MinMaxScaler

# app = Flask(__name__)

# # Load trained model
# model = tf.keras.models.load_model("stock_predictor.h5")

# @app.route("/predict", methods=["GET"])
# def predict():
#     symbol = request.args.get("symbol", "AAPL")
#     df = get_stock_data(symbol)
#     X_test, _, scaler = preprocess_data(df)

#     # Reshape data for prediction
#     X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))

#     # Predict next day's stock price
#     predicted_price = model.predict(X_test)
#     predicted_price = scaler.inverse_transform(predicted_price)[-1][0]

#     return jsonify({"symbol": symbol, "predicted_price": round(predicted_price, 2)})

# if __name__ == "__main__":
#     app.run(port=5001, debug=True)
