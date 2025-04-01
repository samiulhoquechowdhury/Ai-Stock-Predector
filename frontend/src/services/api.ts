import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const signup = async (name: string, email: string, password: string) => {
  return axios.post(`${BASE_URL}/auth/signup`, { name, email, password });
};

export const login = async (email: string, password: string): Promise<any> => {
  const { data } = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return data.user;
};

export const getPortfolio = async (): Promise<any> => {
  const token = localStorage.getItem("token");
  return axios.get(`${BASE_URL}/portfolio`, {
    headers: { Authorization: token },
  });
};

export const addToPortfolio = async (symbol: string): Promise<any> => {
  const token = localStorage.getItem("token");
  return axios.post(
    `${BASE_URL}/portfolio/add`,
    { symbol },
    {
      headers: { Authorization: token },
    }
  );
};
