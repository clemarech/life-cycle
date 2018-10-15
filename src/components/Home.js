import React, {Component} from 'react';
import '../App.css';


class Home extends Component {
  constructor(props){
    super(props)
}
    render() {
      return(
        <div>
          <title> HOME </title>
          <h1>Welcome Home </h1>
          <h2> This IS Home !</h2>
          <img src="https://vignette.wikia.nocookie.net/en.futurama/images/c/cc/PlanetExpressUniverse1.png/revision/latest?cb=20111116000201" alt="home"/> 
        </div>
      )
    }
}

export default Home;
