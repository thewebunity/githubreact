import React from 'react'
import Front from '../component/Front'
import MovieCard from '../component/MovieCard'

function Home() {
  return (
    <>
    <Front />
      <div className="container ">
        <h1 className="text-3xl py-10 font-semibold text-center text-white ">
          Movies
        </h1>
      </div>   
      <div className="movie">
        <MovieCard />
      </div>
    </>
  )
}

export default Home