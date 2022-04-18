import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=>{

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} | NewsDino`
    updateNews()
    // eslint-disable-next-line
  }, [])
  

  const updateNews  = async ()=>{
    props.setProgress(40);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(55);
    let parsedData = await data.json();
    props.setProgress(100);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

  }

 
  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data = await fetch(url)
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
   

  };

    return (
      <>
        <h2 className='text-center' style={{marginTop:'70px', marginBottom:'20px'}}>{`Newsdino - Top  ${capitalizeFirstLetter(props.category)} Headlines`} </h2>

        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >

          <div className="container">

            <div className="row">
              {articles.map((element) => {
                return <div className="col-lg-4 col-md-6 col-sm-12" key={element.url} >
                  <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ''} newsUrl={element.url} imageUrl={element.urlToImage} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} color={props.color} />
                </div>
              })}
            </div>

          </div>
        </InfiniteScroll>


      </>
    )
  
}

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general',
  color: 'success'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News