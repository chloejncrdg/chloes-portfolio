"use client"

import React from 'react'
import { useState, useEffect } from 'react'

import caseStudiesData from '@/app/metadata/caseStudies.json'
import developmentData from '@/app/metadata/development.json'
import artworksData from '@/app/metadata/visualArts.json'

import { motion } from 'framer-motion'

import Link from 'next/link'
import Image from 'next/image'


const Works = () => {

  const [activeTab, setActiveTab] = useState('caseStudies');
  const [caseStudyProjects, setCaseStudyProjects] = useState([])
  const [devProjects, setDevProjects] = useState([])
  const [artworks, setArtworks] = useState({ posters: [], personalArt: [] })
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null); // State to handle modal image
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  useEffect(() => {
    setLoading(true);
    switch (activeTab) {
      case 'caseStudies':
        const { caseStudies } = caseStudiesData
        setCaseStudyProjects(caseStudies)
        setLoading(false);
        break;
      case 'development':
        const { developmentProjects } = developmentData
        setDevProjects(developmentProjects)
        setLoading(false);
        break;
      case 'visualArts':
        const { artworks } = artworksData
        setArtworks(artworks)
        setLoading(false);
        break;
      default:
        setLoading(false)
        break;
    }
  }, [activeTab]);

  function Loading() {
    return (
        <div>
            Loading
        </div>
    )
  }

  // Handle image click to open modal
  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  }

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  }

  return (
    <div className="w-full min-h-screen bg-[#fdf8eb]">
      <div className="bg-[#fdf8eb] flex flex-col items-center justify-center font-he-regular">
        <p className='pt-20 text-3xl'>WORKS</p>
        <div className='pt-12 flex gap-12'>
          <button onClick={() => setActiveTab('caseStudies')} className='text-lg border border-solid border-black px-3 rounded-full'>CASE STUDIES</button>
          <button onClick={() => setActiveTab('development')} className='text-lg border border-solid border-black px-3 rounded-full'>DEVELOPMENT</button>
          <button onClick={() => setActiveTab('visualArts')} className='text-lg border border-solid border-black px-3 rounded-full'>VISUAL ARTS</button>
        </div>
        <div className="flex flex-wrap md:p-10">
          {loading ? (
            <Loading />
          ) : (
            <>
              {activeTab === "caseStudies" && (
                caseStudyProjects.length > 0 ? (
                  caseStudyProjects.map(caseStudy => (
                    <div className="p-6 w-full md:basis-1/2" key={caseStudy.id}>
                      <motion.div initial={{ opacity: 0 }} animate={{ y: [50, 0, 0], opacity: 1 }} transition={{ duration:0.5, y: { duration: 1.2 } }}>
                        <Link href={`/case-studies/${caseStudy.id}`}>
                        <div className="relative aspect-w-16 aspect-h-9">
                          <Image
                            src={caseStudy.thumbnail || 'placeholder-image-url.jpg'} // Replace with actual image URL or fallback
                            alt="Case Study Thumbnail"
                            className="w-full h-full object-cover rounded-lg border-2 border-gray-500"
                          />
                        </div>
                        </Link>
                        <div className="flex gap-1">
                          <p className="text-sm pt-3"><strong>{caseStudy.title}</strong></p>
                          <p className="text-sm pt-3">{caseStudy.date}</p>
                        </div>
                        <p className="font-be-regular text-3xl pt-1">
                          {caseStudy.subtitle}
                        </p>
                        <div className="flex">
                          <p className="text-sm pt-2">UI/UX CASE STUDY</p>
                        </div>
                      </motion.div>
                    </div>
                  ))
                ) : (
                  <p className="mt-4 text-gray-400">No case studies available</p>
                )
              )}
              {activeTab === "development" && (
                devProjects.length > 0 ? (
                  devProjects.map(project => (
                    <div className="p-6 w-full md:basis-1/2" key={project.id}>
                      <motion.div initial={{ opacity: 0 }} animate={{ y: [50, 0, 0], opacity: 1 }} transition={{ duration:0.5, y: { duration: 1.2 } }}>
                        <Link href={`/development/${project.id}`}>                        
                          <div className="relative aspect-w-16 aspect-h-9">
                            <Image
                              src={project.thumbnail || 'placeholder-image-url.jpg'} // Replace with actual image URL or fallback
                              alt="Development Project Thumbnail"
                              className="w-full h-full object-cover rounded-lg border-2 border-gray-500"
                            />
                          </div>
                        </Link>
                        <div className="flex gap-1">
                          <p className="text-sm pt-3"><strong>{project.title},</strong></p>
                          <p className="text-sm pt-3">{project.date}</p>
                        </div>
                        <p className="font-be-regular text-3xl pt-1">
                          {project.subtitle}
                        </p>
                        <div className="flex">
                          <p className="text-sm pt-2">SYSTEM DEVELOPMENT</p>
                        </div>
                      </motion.div>
                    </div>
                  ))
                ) : (
                  <p className="mt-4 text-gray-400">No development projects available</p>
                )
              )}
              {activeTab === "visualArts" && (
                <div className="p-5 md:p-10">
                  <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
                  <h2 className="text-3xl font-be-regular text-gray-700 mb-4">Posters and Illustrations</h2>
                    {/* Render Posters */}
                    {artworks.posters && artworks.posters.length > 0 ? (
                      artworks.posters.map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`Poster ${index + 1}`}
                          className="w-full mb-4 rounded-lg cursor-pointer"
                          onClick={() => handleImageClick(image)} // Open modal on click
                        />
                      ))
                    ) : (
                      <p className="text-gray-400">No posters available</p>
                    )}

                    {/* Render Personal Art */}
                    <h2 className="text-3xl font-be-regular text-gray-700 mb-4">Personal Art</h2>
                    {artworks.personalArt && artworks.personalArt.length > 0 ? (
                      artworks.personalArt.map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`Personal Art ${index + 1}`}
                          className="w-full mb-4 rounded-lg cursor-pointer"
                          onClick={() => handleImageClick(image)} // Open modal on click
                        />
                      ))
                    ) : (
                      <p className="text-gray-400">No personal art available</p>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal for Image */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative">
              <Image
                src={modalImage}
                alt="Modal Content"
                className="max-w-full max-h-screen object-contain"
              />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-xl font-regular bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
            &#10006;
            </button>


            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Works
