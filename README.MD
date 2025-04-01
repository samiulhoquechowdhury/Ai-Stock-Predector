# AI-Powered Stock Price Predictor

An AI-powered stock price predictor that provides real-time stock tracking, predicted vs. actual price visualization, user authentication, and portfolio tracking. The project uses React.js (frontend) and Node.js with Express.js (backend), with a machine learning model (LSTM or ARIMA) to predict stock prices.

## Features

- **Real-Time Stock Tracking:** Track stock prices in real-time.
- **Predicted vs. Actual Price Visualization:** Compare predicted prices with actual stock data using charts.
- **User Authentication:** Secure login and signup system using JWT (JSON Web Tokens).
- **Portfolio Tracking:** Users can save their favorite stocks and track their portfolio.
- **Stock Price Prediction:** Predict future stock prices using LSTM or ARIMA model.

## Tech Stack

### Frontend

- **React.js**
- **Recharts** (for stock price charts)
- **Axios** (for API calls)
- **React Router DOM** (for routing)

### Backend

- **Node.js with Express.js**
- **MongoDB** (for storing user data and historical stock prices)
- **BcryptJS** (for password hashing)
- **JWT** (for authentication)
- **Axios** (for communication between frontend and backend)

### Machine Learning

- **LSTM (Long Short-Term Memory)** or **ARIMA** for stock price prediction

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-stock-price-predictor.git
cd ai-stock-price-predictor
```

### 2. Set up the backend

1. **Navigate to the backend folder:**

   ```bash
   cd backend
   ```

2. **Install required dependencies:**

   Run the following command to install all necessary backend dependencies:

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   In the backend folder, create a `.env` file and add the following environment variables:

   ```ini
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongo_database_uri
   ```

   - `JWT_SECRET`: Replace with a secret key for JWT authentication.
   - `MONGO_URI`: Replace with your MongoDB connection URI.

4. **Start the backend server:**

   After setting up the environment variables, start the backend server with:

   ```bash
   npm start
   ```

   This will start the backend server on `http://localhost:5000` by default. The backend will now be ready to handle requests.

## Endpoints

### Authentication

- **POST /api/auth/signup**

  **Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

## Contributing

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Future Enhancements

- **Sentiment Analysis:** Analyze news sentiment to predict stock trends.
- **Stock Screener:** Users can filter and search for stocks by specific criteria.
- **Real-Time Stock Alerts:** Send notifications when stock prices hit specific thresholds.
- **Gamification:** Add leaderboards and community predictions to engage users.
- **Performance Optimization:** Cache stock data with Redis to improve performance.

---

## Contact

- **Author:** Samiul Chowdhury
- **GitHub:** [github.com/your-username](https://github.com/samiulhoquechowdhury)
