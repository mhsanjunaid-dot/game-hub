import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1e01d6f61b4a4da19a85355f38900fab",
  },
});