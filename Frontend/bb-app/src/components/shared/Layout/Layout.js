import React from 'react'
import Header from './Header'

const Layout = ({childern}) => {
  return (
    <>
    <div className='header'>
        <Header />
    </div>
    <div className='content'>{childern}</div>
      
    </>
  )
}

export default Layout
