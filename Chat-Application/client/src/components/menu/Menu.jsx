
import React from 'react'
import Conversation from './Conversation'
import Header from './Header'
import Search from './Search'

const Menu = () => {
  return (
    <React.Fragment>
        <Header/>
        <Search/>
        <Conversation/>
    </React.Fragment>
  )
}

export default Menu