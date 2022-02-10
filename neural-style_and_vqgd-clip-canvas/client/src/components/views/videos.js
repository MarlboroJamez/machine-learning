import React from 'react'

//Components
import GalleryCard from '../cards/galleryCard';

function Videos() {
  return (
    <div className="flex flex-wrap">
      <GalleryCard/>
      <GalleryCard/>
      <GalleryCard/>
    </div>
  )
}

export default Videos