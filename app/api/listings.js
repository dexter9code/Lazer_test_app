import client from "./client";

const endPoint = "/listings";

const getListing = () => client.get(endPoint);

export default {
  getListing,
};
