"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import masterList from '@/app/metadata/masterList.json';


import { motion } from 'framer-motion'

import Image from 'next/image'


export default function Home() {
  const [recentWorks, setRecentWorks] = useState([]);

  useEffect(() => {
    // Set the first two works from the allWorks array to recentWorks
    const works = masterList.allWorks.slice(0, 2);
    setRecentWorks(works);
  }, []);


  return (
    <main>
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col p-14 md:px-72 py-24">
          <div className="w-full h-64 flex items-center justify-center font-he-regular">
            <Image
              src="/assets/home/logo.png" // Replace with your logo path
              alt="Logo"
              className="h-full object-contain" // Ensures the logo scales without distortion
            />
          </div>
          <p className="text-3xl md:text-7xl md:w-[850px] font-be-regular text-center -mt-12 md:-mt-16 text-[#393400]">
          &quot;A problem well-stated is a problem half-solved.&quot;
          </p>
        </div>
      </div>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="max-w-fit text-xl font-he-medium border-solid border-b-2 pt-12 text-[#393400]">
          RECENT WORKS
        </div>
        <div className="flex flex-wrap md:p-10">
          {/* Loop over recent works and display them */}
          {recentWorks.map((work) => (
            <div key={work.id} className="p-6 w-full md:basis-1/2">
              {/* Conditionally set the link based on the work's tag */}
              <motion.div initial={{ opacity: 0 }} animate={{ y: [50, 0, 0], opacity: 1 }} transition={{ duration:0.5, y: { duration: 1.2 } }}>
              <Link href={work.tag === 'case-study' ? `/case-studies/${work.id}` : `/development/${work.id}`}>
                <div className="h-64 md:h-96 bg-gray-400 rounded-lg border-2 border-gray-500 cursor-pointer">
                  <Image src={work.thumbnail} alt={work.title} className="w-full h-full object-cover rounded-lg" />
                </div>
              </Link>
              <div className="flex gap-1">
                <p className="text-sm pt-3"><strong>{work.title},</strong></p>
                <p className="text-sm pt-3">{work.date}</p>
              </div>
              <p className="font-be-regular text-3xl pt-1">
                {work.subtitle}
              </p>
              <div className="flex">
                <p className="text-sm pt-2">{work.tag.toUpperCase()}</p>
              </div>
              </motion.div>
            </div>

          ))}
        </div>
        <Link href="/works"><div className="max-w-fit text-xl font-he-medium p-10 text-[#393400]">
          &#x2192; VIEW MORE
        </div></Link>
      </div>
      <div className="h-full bg-[#fff8e7] flex flex-col items-center justify-center py-20">
        <p className="text-3xl md:text-7xl font-be-regular text-center text-[#393400]">
          Interested in working together?
        </p>
        <p className="text-base text-center w-full py-4 px-12 md:text-xl md:w-1/2 md:py-10 text-[#393400]">
          You can reach me through my LinkedIn or Email!
        </p>
        <div className="flex gap-6">
          <Link href="mailto:carandangcn@students.national-u.edu.ph"><FontAwesomeIcon className="text-5xl text-[#393400]" icon={faEnvelope}/></Link>
          <Link href="https://www.linkedin.com/in/chloe-jadyn-carandang-5040a8216/"><FontAwesomeIcon className="text-5xl text-[#393400]" icon={faLinkedinIn}/></Link>
        </div>
      </div>
    </main>
  );
}
