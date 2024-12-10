import { apiConfig } from "./apiConfig"

export const getBooks = async (dataFilter) => {
 return await apiConfig.get(`/books/?page=${dataFilter.page}&limit=${dataFilter.limit}&sorting=${dataFilter.sorting}&release_date=${dataFilter.date}&genre=${dataFilter.genre}`);
}

export const getBook = async (slug) => {
 return await apiConfig.get(`/books/${slug}`);
}

export const getRelatedBooksByGenres = async (id,genres) => {
 return await apiConfig.get(`/books-related-books-by-genres/?id=${id}&genres=${genres}`)
}

export const getBookLinkBySlug = async (slug) => {
 return await apiConfig.get(`/books-slug/${slug}`)
}