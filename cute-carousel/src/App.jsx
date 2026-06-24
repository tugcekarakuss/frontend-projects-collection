import './style.css'
import { animals } from '../data'
import { useState } from 'react'
function App() {
  const [index,setIndex]=useState(0)
  const animal=animals[index]
  
  function handleNextClick() {
    if(index<animals.length-1){
      setIndex(index+1)
    }
    else{
      setIndex(0)
    }
  }
  function handlePreviousClick() {
    if(index>0){
      setIndex(index-1)
    }
    else{
      setIndex(animals.length-1)
    }
  }
  return (
    <>
     <h1 className='text-5xl text-center mb-5 text-dark-pink'>Cute Carousel</h1>
     <div className="container bg-bg py-5 px-4 rounded-4xl space-y-3 max-w-sm  flex flex-col">
      <p>{index+1} of {animals.length-1}</p>
      <img src={animal.image} className='rounded-2xl' alt=""/>
      <p className='text-center'>{animal.description}</p>
      <div className='flex justify-center gap-10'>
        <button className='bg-button rounded-full py-3 px-7' onClick={handlePreviousClick}>Previous</button>
        <button className='bg-button rounded-full py-3 px-7' onClick={handleNextClick}>Next</button>
      </div>
     </div>
    </>
  )
}

export default App
