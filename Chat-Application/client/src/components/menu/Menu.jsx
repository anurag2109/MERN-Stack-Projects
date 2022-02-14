
import React, { useState } from 'react'
import Conversations from './Conversations'
import Header from './Header'
import Search from './Search'


const Menu = () => {
  const [text, setText] = useState('');
  return (
    <React.Fragment>
        <Header/>
        <Search setText={setText}/>
        <Conversations text={text}/>
    </React.Fragment>
  )
}

export default Menu