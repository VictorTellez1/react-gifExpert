import React from 'react'

const Gift = ({gifts}) => {
  return (
    <>
        <h2 className='text-center'>{gifts.title}</h2>
        <img src={`${gifts.url}`}/>
    </>
  )
}

export default Gift
