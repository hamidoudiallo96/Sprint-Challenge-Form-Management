import React, { Component } from 'react'
import {withFormik,Field,Form} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import '../App.css'



class RegistrationForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    componentDidUpdate(prevState,prevProps){
        if(prevState.status !== prevProps.status && this.props.status){
            this.props.registryConfirm()
        }
    }
    
    render() {
        return (
            <div>
                <Form>
                   <label>
                        Username
                        <Field
                            type ="text"
                            name ="username"
                            placeholder ="Username"
                        />
    
                        {this.props.errors.username && this.props.touched.username && <p className ="error">{this.props.errors.username}}</p>}
                   </label>
    
                    <label>
                        Password
                        <Field
                            type ="password"
                            name ="password"
                            placeholder ="Password"
                        />
                        {this.props.errors.password && this.props.touched.password && <p className ="error">{this.props.errors.password}</p>}
                    </label>
                    <button type  = 'submit'>Submit</button>
                </Form>
            </div>
        )
    }
}


const FormikForm = withFormik({
    mapPropsToValues({username,password}){
        return{
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required().min(6)
    }),
    handleSubmit(values,{resetForm,setStatus,setSubmitting}){
        console.log(values)
        axios.post('http://localhost:5000/api/register',values)
        .then(res =>{
            console.log(res)
            resetForm()
            setStatus(res.data)
        })
        .catch(err => {
            console.log(err)
            setSubmitting(false)
        })
        
        
    }
})(RegistrationForm)

export default FormikForm


// function RegistrationForm({errors,touched}) {
   
   
    
    
// }