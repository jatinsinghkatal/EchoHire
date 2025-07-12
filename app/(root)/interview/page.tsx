import React from 'react'
import Agent from '@/components/Agent'

const page = () => {
  return (
    <>
        <h3> Interview Generation</h3>
        <Agent userName = "You" userId = "user-1" type = "generate" />
    </>
  )
}

export default page