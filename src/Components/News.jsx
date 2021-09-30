import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
    let data = await fetch(url).then((res) => res.json());
    this.setState({ articles: data.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state?.articles?.map((article) => {
            return (
              <div className="col-md-4" key={article?.url}>
                <NewsItem
                  imageUrl={article?.urlToImage}
                  title={article?.title?.slice(0, 45)}
                  newsUrl={article?.url}
                  description={article?.description?.slice(0, 87)}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" class="btn btn-primary">
            Previous
          </button>
          <button type="button" class="btn btn-primary">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
