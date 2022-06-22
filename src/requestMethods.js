import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// if (JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.accessToken === null){
//   console.log(1)
// }

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWJmZDVhNGIyNTAxZGRmY2VkY2NhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTgzMzAzMywiZXhwIjoxNjU2MDkyMjMzfQ.ETrIcl8Bb7fGEJChJfbBcEZNX60egHxZuR8CNXRmnO8"
console.log("daly la:", TOKEN)


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});