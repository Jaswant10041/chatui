import React from 'react'
import Nav from './Nav'
import Body from './Body'
import Footer from './Footer'

const App = () => {
  return (
    <div className='bg-black'>
      <div><Nav/></div>
      <div className='px-8'><Body/></div>
      <div className='px-12'><Footer/></div>
    </div>
  )
}

export default App