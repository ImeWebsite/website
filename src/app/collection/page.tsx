'use client'
import React, {useState, useEffect} from 'react'
import pageStyle from './article.module.css'
import ImageFrame from '../../components/Article/ImageFrame';
import Gallery from '../../components/Article/Gallery';
const page = () => {
    const [article, setArticle] = useState({});
    useEffect(() => {
        fetch(process.env.API_URL + '/events').then(res => res.json()).then(data => {
            setArticle(data.events[0]);
            console.log(data, article)
        });
    }, []);

    if(!article.title) return <main className={pageStyle.main}>Chargement...</main>

  return (
    <main className={pageStyle.main}>
        <h1 className={pageStyle.mainTitle}>{article.title}</h1>
        <h4 className={pageStyle.date}>{article.date}</h4>
        <p className={pageStyle.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ImageFrame
            imageUrl="/actu1.png"
            width="100%"
            height="50vw"
        />
        {article.text.split('\\n').map((part, key) => {
            return (<p key={key} className={pageStyle.text}>{part}</p>)
        })}
        <Gallery imagesUrls={["/actu1.png","/actu1.png","/actu1.png","/actu1.png","/actu1.png","/actu1.png","/actu1.png","/actu1.png"]} />
    </main>
  )
}

export default page