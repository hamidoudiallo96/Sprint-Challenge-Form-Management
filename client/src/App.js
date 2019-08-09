import React, { Component } from 'react'
import axios from 'axios'
import FormikForm from './Components/Form.js';
import FormList from './Components/FormList.js'
import 'semantic-ui-css/semantic.min.css'



export default class App extends Component {
  
  constructor() {
    super()
  
    this.state = {
       users : []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/restricted/data')
    .then(res =>{
      console.log(res.data)
      this.setState({
        users:res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
      
  }

  
  

  
  render() {
    return (
      <div>
        <FormikForm registryConfirm = {this.registryConfirm}  />
        <FormList users ={this.state.users} />

      
        
      </div>
    )
  }
}






