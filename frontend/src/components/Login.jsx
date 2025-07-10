import React, { useState } from 'react'
import {Box, Button, Container, TextField, Typography} from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Login = () => {
    var [user,setUser] = useState({})
    
     const inputHandler = (e)=>{
    //   console.log(e.target.value)
      setUser({...user,[e.target.name]:e.target.value})
      console.log(user)
    }

    const addUser = ()=>{
        axios
        .post("http://localhost:3000/api/login",user)
        .then((res)=>{console.log(res)
            alert(res.data.message)
        })
        .catch((err)=>{console.log(err)})
    }

  return (
    <div>
     <Container maxWidth='sm'>
         <Box
          sx={{
            padding:4,
            backgroundColor:'white',
            borderRadius:2,
            marginTop:14,
            boxShadow:3,
            textAlign:'center',
        }}
      >
        <Typography variant='h4' 
        color='purple' align='centre' gutterBottom>
            Welcome to Product App
        </Typography>
        <TextField
        fullWidth
        variant='outlined'
        label='Username'
        margin='normal'
        name='username'
        onChange={inputHandler}
        />
        <TextField
        fullWidth
        variant='outlined'
        label='Password'
        margin='normal'
        name='password'
        onChange={inputHandler}
        />
        <Button variant='contained' color='secondary' fullWidth sx={{mt:2}}  onClick={addUser}>login</Button>
        <br /><br />
        <Button>
            <Link to={'/s'}>create a new account</Link>
        </Button>
      </Box>
     </Container>
    </div>
  )
}

export default Login


