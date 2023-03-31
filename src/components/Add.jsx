import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
 var[input,setInput] = useState({
    name:'',
    grade:''
 })

const inputHandler = (e)=>{
    const{name,value} = e.target
    setInput({...input,[name]:value})
}
const readvalues=()=>{
    console.log("Clicked")
    axios.post("http://localhost:3005/students",input)
    .then(response=>{
        alert("Sucessfully added")
    })``
   .catch(error=>console.log(error))
}


    <div>
       
      <TextField label='Name' name='name' value={input.value} onChange={inputHandler} />
      <TextField  label='Grade' name='grade' value={input.grade} onChange={inputHandler} />
     <Button variant='contained'  onClick ={readvalues} color='success'>Submit</Button>
    </div>
  
}

export default Add
