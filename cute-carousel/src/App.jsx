import './style.css'
import { animals } from '../data'
function App() {
  const animal=animals[5]
  return (
    <>
     <h1 className='text-5xl text-center mb-5 text-dark-pink'>Cute Carousel</h1>
     <div className="container bg-bg py-5 px-4 rounded-4xl space-y-3 max-w-md">
      <p>1 of 6</p>
      <img src={animal.image} className='rounded-2xl ' alt=""/>
      <p className='text-center'>{animal.description}</p>
      <div className='flex justify-center gap-10'>
        <button className='bg-button rounded-full py-3 px-7'>Previous</button>
        <button className='bg-button rounded-full py-3 px-7'>Next</button>
      </div>
     </div>
    </>
  )
}

export default App
