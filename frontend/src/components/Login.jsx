import React, { useState } from 'react'
import {Box, Button, Container, TextField, Typography} from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const baseURl = import.meta.env.VITE_API_BASE_URL

    var [user,setUser] = useState({})
    var navigate = useNavigate()
     const inputHandler = (e)=>{
    //   console.log(e.target.value)
      setUser({...user,[e.target.name]:e.target.value})
      console.log(user)
    }

    const addUser = ()=>{
        axios
        .post(`${baseURl}/api/login`,user)
        .then((res)=>{console.log(res)
            sessionStorage.setItem("role",res.data.user.role)
            alert(res.data.message)
            navigate('/p')
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


