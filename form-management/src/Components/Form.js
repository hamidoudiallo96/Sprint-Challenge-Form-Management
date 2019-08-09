import React,{Component} from 'react'
import {Formik, FormikProps, Form, Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import '../App.css'


export default class MyForm extends Component {
    handleSubmit = (values, { 
    props = this.props, 
    setSubmitting 
  }) => {
     
    console.log(values)
    setSubmitting(false);
    return;
  }
   
  render() {
     
    return(
      <Formik
        initialValues={{
           username: '',
           password: ''
        }}
        validate={(values) => {
          let errors = {};
      
            if(!values.username){
                errors.username = "Username Required";
            }
             
              

            if(!values.password){
                errors.password = "Password Required"
            }else if(values.password.length < 5){
                errors.password = "Password should be longer than 5 characters"
            }
            

             //check if my values have errors
             return errors;
        }}
        onSubmit={this.handleSubmit}
        render={(formProps) => {
          return(
            <Form>
               <Field 
                 type="text" 
                 name="username" 
                 placeholder="Username" 
               /> 
               { formProps.touched.username &&
                formProps.errors.username &&
                <span className='error'>{formProps.errors.username}</span>
                }
                
                <Field 
                  type="password" 
                  name="password" 
                  placeholder="Passowrd" 
			         	/> 
                { formProps.touched.password &&
                formProps.errors.password &&
                <span className='error'>{formProps.errors.password}</span>
                }

                
                                
                <button 
                  type="submit" 
                  disabled={formProps.isSubmitting}>
                    Submit Form
                 </button>
              </Form>
           );
        }}
     />);
   }
                    
}




