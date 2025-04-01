import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

# Connect to MongoDB
client = pymongo.MongoClient(os.getenv("MONGO_URI"))
db = client["stockDB"]
collection = db["stocks"]

def get_stock_data(symbol):
    """ Fetch historical stock data from MongoDB """
    data = list(collection.find({"symbol": symbol}).sort("date", 1))
    df = pd.DataFrame(data)
    df["date"] = pd.to_datetime(df["date"])
    df.set_index("date", inplace=True)
    return df[["close"]]

def preprocess_data(df):
    """ Normalize data and prepare for LSTM """
    scaler = MinMaxScaler(feature_range=(0,1))
    scaled_data = scaler.fit_transform(df)
    
    X_train, y_train = [], []
    for i in range(60, len(scaled_data)):
        X_train.append(scaled_data[i-60:i, 0])
        y_train.append(scaled_data[i, 0])
    
    return np.array(X_train), np.array(y_train), scaler

if __name__ == "__main__":
    df = get_stock_data("AAPL")
    X_train, y_train, scaler = preprocess_data(df)
    print(f"Data Shape: {X_train.shape}, {y_train.shape}")
