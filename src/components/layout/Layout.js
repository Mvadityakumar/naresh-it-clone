import React from 'react'
import Routers from '../../routes/Routers'
import Headertop from '../header/Headertop'
import Header from '../header/Header'


const Layout = () => {
  return (
    <div>
        <Headertop/>
        <Header/>
        <Routers/>
    </div>
  )
}

export default Layout