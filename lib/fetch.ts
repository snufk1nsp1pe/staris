import { Review, ReviewFrontmatter, TMDBMovie } from "./types"

export default async function Fetch({frontmatter, review}:{frontmatter?:ReviewFrontmatter, review?: Review}){
   const id = frontmatter? frontmatter.link.split('https://www.themoviedb.org/movie/')[1].split('-')[0] : review? review.link.split('https://www.themoviedb.org/movie/')[1].split('-')[0] : ''
  const api_key = process.env.TMDB_API_KEY
    const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,
    { next: { revalidate: 60 * 60 } }
  )
    const data: TMDBMovie = await res.json()
      const type = review && review.image || frontmatter && frontmatter.image

  const path = type === 'backdrop' ? data.backdrop_path : data.poster_path
  const year = data.release_date?.split('-')[0] || 'N/A'
    const title = data.title
    return{title:title, year: year, path: path}
}







//   const api_key = process.env.TMDB_API_KEY
//   const type = review.image
//   const id = review.link
//     .split('https://www.themoviedb.org/movie/')[1]
//     .split('-')[0]
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,
//     { next: { revalidate: 60 * 60 } }
//   )
//   const data: TMDBMovie = await res.json()
//   console.log(data)
//   const path = type === 'backdrop' ? data.backdrop_path : data.poster_path
//   const year = data.release_date.split('-')[0]
//   const title = data.title
//   console.log(title)