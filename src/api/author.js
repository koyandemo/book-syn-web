import { apiConfig } from "./apiConfig"

export const getAuthors = async (dataFilter) => {
 return await apiConfig.get(`/authors/?page=${dataFilter.page}&limit=${dataFilter.limit}&sorting=${dataFilter.sorting}&birthday=${dataFilter.date}`)
}

export const getAuthor = async (slug) => {
 return await apiConfig.get(`/author/${slug}`);
}
