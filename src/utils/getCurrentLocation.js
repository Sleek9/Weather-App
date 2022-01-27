import axios from "axios";

export default async function getCurrentLocation() {
  try {
    const res = await axios.get(
      `https://api.ipdata.co/?api-key=${process.env.KEY_API}`
    );
    return res.data.city;
  } catch (e) {
    return null;
  }
}
