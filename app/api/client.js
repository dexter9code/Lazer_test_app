import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.40:4545/lazer",
});

export default apiClient;
