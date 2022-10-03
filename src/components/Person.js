import React from 'react'
import { useParams } from 'react-router-dom'

function Person() {
    const{id}  = useParams()
  return (
    <div>
        <h1>Your id is {id}</h1>
    </div>
  )
}

export default Person