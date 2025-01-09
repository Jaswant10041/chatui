import React from 'react'
import Nav from './Nav'
import Body from './Body'
import Footer from './Footer'

const App = () => {
  return (
    <div className='bg-black'>
      <div><Nav/></div>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App