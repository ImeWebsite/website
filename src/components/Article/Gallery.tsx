import React from 'react'
import ImageFrame from './ImageFrame';
import style from './gallery.module.css'
const Row = ({imagesUrls}) => {
    return (
        <div className={style.row}>{imagesUrls.map((imageUrl, key) => <ImageFrame
            key={key}
            imageUrl={imageUrl}
            width="25%"
            height="25vh"
        />)}</div>
    )
}

const Gallery = ({imagesUrls}) => {
    const rows = [[]];
  for(let i = 0; i < imagesUrls.length; i++) {
    rows[rows.length - 1].push(imagesUrls[i]);
    if(i == 3 || i > 4 && i % 4 == 0) {
      rows.push([]);
    }
  }
  return (
    <div className={style.gallery}>
      {rows.map((row, key) => <Row key={key} imagesUrls={row} />)}
    </div>
  )
}

export default Gallery