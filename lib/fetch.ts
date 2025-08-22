

// import { ReviewFrontmatter, TMDBMovie } from "./types"
// import React from 'react'

// export default async function fetch({frontmatter}:{frontmatter:ReviewFrontmatter}){
//    const id = frontmatter.link.split('https://www.themoviedb.org/movie/')[1].split('-')[0]
//   const api_key = 'f89dbaf591dd05cb3e5edf9076909603'
//     const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,
//     { next: { revalidate: 60 * 60 } }
//   )
//     const data: TMDBMovie = await res.json()
//   const path = type === 'backdrop' ? data.backdrop_path : data.poster_path
//   const year = data.release_date.split('-')[0]
// }

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