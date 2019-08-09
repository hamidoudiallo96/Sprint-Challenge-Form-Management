import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { memberExpression } from '@babel/types';
export default function FormList() {
    const [member,setMembers] = useState([])
    useEffect(() => {
        axios.get('')
        .then(res =>{
            console.log(res.config.data)
            setMembers(res.config.data)
            console.log(member)
           
        })
        .catch(err =>{
            console.log(err)
        })
        
    }, [member])
    return (
        <div>
            {member.map((item,index) =>(
                <h1 key = {index}>{item}</h1>
            ))}
        </div>
    )
}
