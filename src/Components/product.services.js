import axios from "axios";

export const ProductListing = async (payload, id) => {
  const response = await axios.get(
    `https://dummyjson.com/c/d2c0-5151-4c4e-a6e4`,
  );
  return response;
};