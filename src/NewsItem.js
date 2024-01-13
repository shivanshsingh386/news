import React from 'react'

function NewsItem(props) {
  let h={
    height:"550px"
  }
  return (
    <>
    <div class="col">
    <div className="card" style={h}>
  <img src={props.idata} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.dec}</p>
    <a href={props.url} className="btn btn-primary">More News</a>
  </div>
</div>
</div>
    </>
  )
}

export default NewsItem