import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signupp = () => {
    const baseURl = import.meta.env.VITE_API_BASE_URL
    
    var [inputs,setInputs] = useState({})
    var navigate = useNavigate();

    const inputHandler = (e)=>{
    //   console.log(e.target.value)
      setInputs({...inputs,[e.target.name]:e.target.value})
      console.log(inputs)
    }
    
    const addData = ()=>{
        axios
        .post(`${baseURl}/api`,inputs)
        .then((res)=>{console.log(res);
        alert(res.data.message);
        navigate('/')
        })
        .catch((err)=>{console.log(err)})
    }

  return (
    <div>
      <Container maxWidth='sm'>
        <Box
        sx={{
            padding:4,
            backgroundColor:'wheat',
            borderRadius:2,
            marginTop:14,
            boxShadow:3,
            textAlign:'center'
        }}
        >
            <Typography variant='h4'>Welcome to ProductApp</Typography>
            <form>
                <TextField
                fullWidth
                label='full name'
                margin='normal'
                name='fullname'
                onChange={inputHandler}
                />
                <TextField
                fullWidth
                label='Username'
                margin='normal'
                name='username'
                onChange={inputHandler}
                />
                <TextField
                fullWidth
                label='Password'
                margin='normal'
                name='password'
                onChange={inputHandler}
                />
                <Button variant='contained' color='secondary' fullWidth sx={{mt:2}} onClick={addData}> Signup</Button>
            </form><br /><br />
            <p>
              <Link to={'/'}>
              already have an account
              </Link>
            </p>
        </Box>

      </Container>
    </div>
  )
}

export default Signupp
