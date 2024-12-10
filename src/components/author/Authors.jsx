import React from 'react'
import Skeleton from '../skeleton/Skeleton'
import Author from './Author'
import './Authors.css'

const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Authors = ({ data }) => {
  return (
    <div className='authors'>
      {
        data.length > 0 ? data?.map((author) => {
          return <Author data={author}></Author>
        })
          :
          counts.map((c) => (
            <Skeleton key={c} />
          ))
      }
    </div>
  )
}

export default Authors
