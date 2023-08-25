import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "546078657e0648ef87e6c19d89de0493",
  },
});
