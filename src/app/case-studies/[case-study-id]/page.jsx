"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import caseStudiesData from '@/app/metadata/caseStudies.json'

const CaseStudy = () => {
  let caseStudyId = useParams()
  caseStudyId = caseStudyId["case-study-id"]

  const { caseStudies } = caseStudiesData
  const data = caseStudies.find(({ id }) => id == caseStudyId)

  const containerRef = useRef(null)
  const imgRef = useRef(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)

    // Dynamically adjust the container's aspect ratio to match the image's natural aspect ratio
    const img = imgRef.current
    if (img) {
      const aspectRatio = img.naturalWidth / img.naturalHeight
      if (containerRef.current) {
        containerRef.current.style.aspectRatio = aspectRatio.toString()
      }
    }
  }

  useEffect(() => {
    // Check if the image is already loaded from the cache
    const img = imgRef.current
    if (img?.complete) {
      handleImageLoad()
    }
  }, [])

  return (
    <div className="w-full min-h-screen">
      {/* Cover Image Section */}
      <div
        ref={containerRef}
        className={`relative w-full ${
          imageLoaded ? '' : 'bg-white animate-pulse'
        }`}
        style={{ aspectRatio: '16 / 9' }} // Default aspect ratio while loading
      >
        <img
          ref={imgRef}
          src={data.cover || 'placeholder-image-url.jpg'} // Replace with your image URL or fallback
          alt="Case Study Cover"
          onLoad={handleImageLoad} // Trigger when image is fully loaded
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-100 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Title */}
      <div className="text-5xl text-center px-12 pt-12 font-be-regular md:text-7xl md:text-left text-[#393400]">
        {data.title}
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-y-10 md:flex-row justify-center w-full p-12 gap-x-16">
        <div className="w-full md:w-1/3">
          <div className="text-3xl font-be-regular py-3 border-b border-[#393400] text-[#393400]">Summary</div>
          <div className="mt-2 text-[#393400]">{data.summary}</div>
        </div>
        <div className="w-full md:w-1/4">
          <div className="text-3xl font-be-regular py-3 border-b border-[#393400] text-[#393400]">Target User</div>
          <div className="mt-2 text-[#393400]">{data.users}</div>
        </div>
        <div className="w-full md:w-1/4">
          <div className="text-3xl font-be-regular py-3 border-b border-[#393400] text-[#393400]">My Role</div>
          <div className="mt-2 text-[#393400]">{data.role}</div>
        </div>
      </div>

      {/* RESEARCH PHASE */}
      <div className="flex flex-col items-center justify-center mt-20 md:mt-24">
        <div className="mt-3 px-8 lg:px-48 md:px-28 w-full">
          {data.images.map((image, index) => (
            <img
              key={index}
              className="bg-gray-400 object-contain w-full"
              src={image}
              alt={`Case Study Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
