import axios from "axios";

const fetchData = async () => {
  return await axios.get("/api/data");
};

export default {
  fetchData
};
