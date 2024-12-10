import { apiConfig } from "./apiConfig"

export const getCollectionList = async () => {
 return await apiConfig.get('/collection-list');
}

export const getCollections = async () => {
 return await apiConfig.get(`/collections`);
}

export const getCollectionDetail = async (slug) => {
 return await apiConfig.get(`/collections/${slug}`)
}