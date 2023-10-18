import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
 
 
  render() {
    return (
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <img src="/images/logo/logo.png" alt="alternatetext" width="50px" height="40px" ></img>
          <Link className="navbar-brand text" to="/">News29</Link>
          {/* <Link className="navbar-brand text-light" to="#">29</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light active" aria-current="page" to="/all">All</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/politics">Politics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/crime">Crime</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/education">Education</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Other
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                  <li><Link className="dropdown-item" to="/science">Science</Link></li>
                  <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="/cricket">Cricket</Link></li>
                  <li><Link className="dropdown-item" to="/ipl">IPL</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/jokes">Jokes</Link></li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <div className="form-check form-switch mt-2">
                  <input className="form-check-input" type="checkbox" role="switch" id="languageSelector"/>
                    <label className="form-check-label" htmlFor="languageSelector" id='language'>English</label>
                </div>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
