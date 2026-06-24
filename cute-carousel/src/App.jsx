import './style.css'
import { animals } from '../data'
import { useState } from 'react'
function App() {
  const [index, setIndex] = useState(0)
  const animal = animals[index]

  function handleNextClick() {
    if (index < animals.length - 1) {
      setIndex(index + 1)
    }
    else {
      setIndex(0)
    }
  }
  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1)
    }
    else {
      setIndex(animals.length - 1)
    }
  }
  return (
    <>
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl md:text-5xl text-center mb-5 text-dark-pink'>Cute Carousel</h1>
      <div className="container bg-bg py-5 px-4 rounded-4xl space-y-3 max-w-sm h-140 mx-auto flex flex-col justify-between shadow-lg">
        <p>{index + 1} of {animals.length}</p>
        <div className='w-full aspect-square overflow-hidden'>
          <img src={animal.image} className='rounded-2xl w-full h-full object-cover' alt={animal.description || "Animal"} />
        </div>

        <div className='flex-1 flex items-center justify-center my-2 overflow-hidden'>
          <p className='text-center text-sm line-clamp-3 text-balance'>
            {animal.description}
          </p>
          </div>
        <div className='flex justify-center gap-10 w-full'>
          <button className='bg-button rounded-full py-3 w-32 hover:opacity-90 active:scale-95 transition' onClick={handlePreviousClick}>Previous</button>
          <button className='bg-button rounded-full py-3 w-32 hover:opacity-90 active:scale-95 transition ' onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
