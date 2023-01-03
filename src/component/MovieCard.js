import React from 'react'
import Data from '../Data'
function MovieCard() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Data.map((value, index) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full drop-shadow-md" key={index}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={value.Poster} />
                  <div className="mt-4">
                    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 text-center">{value.Type}</h3>
                    <p className='mt-1 text-center text-white'>{value.Year}</p>
                    <h2 className="text-gray-100 title-font text-lg font-medium text-center">{value.Title}</h2>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default MovieCard