import { apiConfig } from "./apiConfig"

export const getBat = async () => {
 return await apiConfig.get('/bat');
}

export const getPickData = async (path) => {
 return await apiConfig.get(path);
}