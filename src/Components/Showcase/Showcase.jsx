import React from 'react'
import './Showcase.css';
import MenuComponent from '../menu/MenuComponent'


const Showcase = ({object}) => {
  return (
    <div className='container showCaseText mb-5'>
      <div className='my-3 showCaseTitle'>{object.titulo}</div>
      <div className='my-3 showCaseSubtitle'>{object.subtitulo}</div>

      {object.examples.map(example => <MenuComponent key={example.id} menuItem={example}/>)}

    </div>
  )
}

export default Showcase
