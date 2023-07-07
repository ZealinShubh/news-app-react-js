import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    this.state={
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e2ffabb5f60b442d9800d17afdbf7251";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h1>FactFinder Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url}/>
        </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
