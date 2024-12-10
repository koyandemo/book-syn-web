
export const API_POINT ="https://book-syn-api.vercel.app/"
// export const API_POINT = "http://localhost:5001/"
// export const API_POINT = "http://localhost:5001/"
export const IMG_POINT ="https://booksites.github.io"
// export const IMG_POINT = "https://www.images.indexsyn.com"
export const FB_STORAGE_LINK = "https://firebasestorage.googleapis.com/v0/b/bs-app-52af1.appspot.com/o/"
export const READER_LINK = "https://pg-touch.surge.sh/books/reading/"
//3.82.19.52
export const counts = [1,2,3,4,5,6,7,8];
export const countList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
export const countCollections = [1,2,3]
export const limit = 30;

export const bookCategories = ["algorithms", "angular", "architecture", "assembly", "c", "c#", "c-double-plus", "css", "data-visualization", "design-patterns", "design-principles", "expressjs", "front-end", "html", "java", "javascript", "kotlin", "laravel", "mongodb", "nodejs", "object-oriented", "p5js", "php", "postgres", "project-management", "python", "reactjs", "ruby", "software-construction", "spring", "user-experience"]

export const prefixImg = (name,folder) => {
 if(name.includes('https')){
  return name;
 }else if(folder === "author"){
  return `${IMG_POINT}/images/${folder}/${name}`
 }
 else if(folder === "book"){
  return `${IMG_POINT}/images/${folder}/${name}`
 }
}

export const imgError = ({ currentTarget,name = "profile" }) => {
              currentTarget.onerror = null // prevents looping
              currentTarget.src = `/logo/${name}.jpg`
            }