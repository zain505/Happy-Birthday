import React from 'react';
import './App.css';
import NameForm from './components/NamingForm'
import Wish from './components/Wish'


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name:"",
       num:10
    }
  }
  componentDidMount=()=>{
    this.timer = setInterval(this.countMe, 1000)
    
    
        }
countMe = () => {
    this.setState({
        num: this.state.num - 1
    })
    if(this.state.num===0){
        clearInterval(this.timer)
    }
}
onchangeName = (name) => {
  this.setState({
      name: name

  })
}
  
  render() {
    return (
      <div className="app container">
        
        <Wish num={this.state.num} name={this.state.name}/>
        <NameForm  changename={this.onchangeName}/>
        
      </div>

    )
  }
}

export default App;
