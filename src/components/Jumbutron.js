import React from 'react'
import SearchField from './SearchField'
import "./style.css"

const Jumbutron = () => {
  return (
    <div id='him' className=" flex items-center py-10 bg-image" style={{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:"url(https://images.unsplash.com/photo-1673537226154-0cdb86867c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=1&auto=format%2Ccompress&fit=crop&w=3599&h=594%201x)"}}>
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-white text-6xl font-bold mb-5'>unsplash</h1>
        <p className='text-white font-bold text-1xl'>The internet’s source for visuals.
Powered by creators everywhere.</p>
        <div className='sei'><SearchField /></div>
      </div>
    </div>
  )
}

export default Jumbutron