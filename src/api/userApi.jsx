import axios from "axios";
import { SERVER_URL } from "../constants";
const server_url = SERVER_URL;
const token = sessionStorage.getItem("token");

export const userProfileData = async (userId) => {
  const res = await axios.get(`${server_url}/blogs/user/${userId}`);

  return res;
};

export const postBlog = async (data, userId) => {
  const res = await axios.post(`${server_url}/${userId}/post`, data, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return res;
};

export const register = async (data) => {
  const res = await axios.post(`${server_url}/register`, data, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};
