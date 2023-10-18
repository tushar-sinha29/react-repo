import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0
    }
  }
  getInputData = async () => {
    try {
      var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=hi&apiKey=9c872195bd8a4c2bb1744dad3f2f0121`)
      response = await response.json()
      this.setState({
        articles: response.articles,
        totalResults: response.totalResults
      })
    }
    catch (error) {
      alert("Please Wait. ")
    }
  }
  componentDidMount() {
    this.getInputData()
  }
 
  componentDidUpdate() {
    this.getInputData()
    console.log("Done");
  }

  
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          {
            this.state.articles.map((item, index) => {
              return <NewsItem
                key={index}
                title={item.title}
                description={item.description}
                pic={item.urlToImage}
                url={item.url}
                source={item.source.name}
                date = {item.publishedAt}
              />
            })
          }
        </div>
      </div>
    )
  }
}
