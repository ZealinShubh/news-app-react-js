import React from 'react'

const NewsItem = (props)=> {

    let {title, description, imageurl, newsurl, author, date} = props;
    return (
      <div className='my-4'>
        <div className="card">
        <img src={!imageurl?"https://i.gadgets360cdn.com/large/galaxy_unpacked_2023_samsung_1688609323941.jpg":imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown" : author} on {new Date(date).toUTCString()}</small></p>
                <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-dark btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
