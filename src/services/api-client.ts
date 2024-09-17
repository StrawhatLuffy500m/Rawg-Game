import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2713f4106fb841dbbf8a59e099585280",
  },
});
