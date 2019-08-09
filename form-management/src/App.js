import React, { Component } from 'react'
import MyForm from './Components/Form';
import FormList from './Components/FormList';


export default class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       users : []
    }
  }
  componentDidUpdate(prevProps,prevState){
    this.setState({
      users: [...this.state.users,prevProps.values]
    })
    
  }

  
  render() {
    console.log(this.state.users)
    return (
      <div>
        <MyForm  />
        <FormList />
        
      </div>
    )
  }
}




