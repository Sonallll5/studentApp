import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button } from '@mui/material';

const View = () => {
  var[Students,setStudent]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3005/students")
    .then(response=>{setStudent(Students=response.data)
      console.log(Students)
    })
    .catch(error=>console.log(error))
  },[])
  const deleteValue = (id)=>{
    console.log(id)
    axios.delete("http://localhost:3005/students/"+id)
    .then(response=>{
      alert("suceessfully deleted")
      window.location.reload(false)
    })
    .catch(err=>console.log(err))
     
  }


  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>GRADE</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {Students.map((value,index)=>{
                return <TableRow>
                  
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.grade}</TableCell>
                 
                    <Button onClick={()=>deleteValue(value.id)}>delete</Button>
               
                </TableRow>
              })}
            </TableBody>
        </Table>
    </TableContainer>
   
  )
}

export default View
