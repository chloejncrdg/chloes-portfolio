"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const VisualArts = () => {

  let visualArtsId = useParams()
  visualArtsId = visualArtsId["visual-arts-id"]

  return (
    <div>VisualArts</div>
  )
}

export default VisualArts