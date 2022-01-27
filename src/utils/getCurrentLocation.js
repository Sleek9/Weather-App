import axios from "axios";

export default async function getCurrentLocation() {
  try {
    const res = await axios.get("http://ip-api.com/json");
    return res.data.city;
  } catch (e) {
    return null;
  }
}
