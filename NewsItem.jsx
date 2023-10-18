import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <div className="col-xl-2 col-lg-3 col-mg-4 col-sm-6 col-12">
        <div className="card-group mt-2">
            
          <div className="card">
            <img
              src={this.props.pic}
              height="110px"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h6 className="">{this.props.source}</h6>
              <h5 className="card-title">{this.props.title}</h5>
              {/* <h6 className="card-title">{this.props.date}</h6> */}
              <p className="card-text">{this.props.description}</p>
            </div>

            <div className="card-footer">
              <small className="text-body-secondary">{this.props.date}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
