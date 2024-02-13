import React from 'react'

export default function Article(props) {
 const blogPosts =props.articles?.map(article=>{
    return(
        <article>
    <time datetime={article.date}>{article.date}</time>
    <h2>{article.title}</h2>

    <img src={article.image} />

    <p>{article.text}</p>
    <a className='continue' href="..." >Continues...</a>
    
</article>
    )
 })
 
 
    return (
    <div>{blogPosts}</div>
  )
}
