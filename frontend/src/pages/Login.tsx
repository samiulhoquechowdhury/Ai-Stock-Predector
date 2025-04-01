import React, { useState } from "react";
import { login } from "../services/api";

interface LoginForm {
  email: string;
  password: string;
}

interface LoginProps {
  onLogin: (user: any) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });

  const handleLogin = async () => {
    const user = await login(form.email, form.password);
    onLogin(user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
