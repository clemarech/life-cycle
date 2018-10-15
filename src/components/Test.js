import React, {Component} from 'react';


class Test extends Component {
constructor(props){
  super(props)
  this.state = {
    date: new Date ()
  }
}
componentDidMount(){
  this.timerID = setInterval(() =>
  this.tick(),
  1000
);
}

componentWillUnmount() {
  clearInterval(this.timerID);
}

tick(){
  this.setState({
    date: new Date()
  });
}

componentDidUpdate(){
    console.log('un update a eu lieu');
}
  render(){
    return (
      <div>
        <h1>Enfin le timer est là !!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }


}
export default Test;
