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
        <img src="https://www.syfy.com/sites/syfy/files/styles/syfy_cast_detail_normal_wide_1x/public/cast_futurama_proffarnsworth.jpg?itok=xQHAlhRl&timestamp=1508358104" alt="prof"/>
        <p> Hurry Up now !</p>
      </div>
    )
  }


}
export default Test;
