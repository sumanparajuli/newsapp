import React from 'react'

const NewsItem = (props)=> {
    let  {title , description, imageUrl, newsUrl, author, date, source, color} = props
    return (
      <div>
          <div className="card" >
          <span className={`badge rounded-pill bg-${color}`} style={{display: 'flex',justifyContent:'flex-end',position:'absolute', right:'0'}}>
    {source}
    <span className="visually-hidden"></span>
  </span>
            <img src={!imageUrl?'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png':imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
}

export default NewsItem