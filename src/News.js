import axios from 'axios'
import NewsItem from './NewsItem'
import React,{useState,useEffect} from 'react'
function News(props) {
  let[nitem,setnitem]=useState([])
  let show=()=>{
    let result=axios.get(`https://newsapi.org/v2/everything?q=${props.category} &language=hi&apiKey=eff384d93e194431bdb1a0fb2cbc6407`)
    // console.log(result);
    result.then((res)=>{
// console.log(res.data.articles);  
setnitem(res.data.articles)
    })
  }
    useEffect(()=>{
      show()
    },[props.category])
  return (
    <>
    {nitem?<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      {nitem.map((item)=>{
return(
  <NewsItem
  title={item.title}
  dec={item.description}
  url={item.url}
  idata={item.urlToImage}
  />
)
      })}
    </div>:<p>no data</p>}
    
    </>
  )
}

export default News