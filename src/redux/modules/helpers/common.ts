import axios from "axios";

const baseURL = `https://api.hatchways.io/assessment`;

export const api = axios.create({ baseURL });
