import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../App.css';


class History extends Component {
  constructor(props){
    super(props)
}
    render() {
      return(
        <div>
          <title> HISTORY </title>
            <h1>History</h1>
            <h2> Zoidberg </h2>
              <img src="http://www.cartoonswallpapers.net/wallpapers/futurama-zoidberg-cartoon-wallpaper-nexus-6.jpg" alt="home"/>
              <p>
                  Why ?
              </p>
              <NavLink activeClassName="active" to="/test"> Go to a test ! </NavLink>
        </div>
      )
    }
}

export default History;
