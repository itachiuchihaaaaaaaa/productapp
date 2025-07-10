import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Admin = () => {
  var[pro,setPro] = useState({
      proName:"" ,
       price:"",
         dis:"",
         stock:"",
         images:[]                    
  });

    const inputHandler = (e)=>{
        // console.log(e.target.value)
        setPro({...pro,[e.target.name]:e.target.value})
        console.log(pro)
    }

    const submitHandler = ()=>{
      const formData  = new FormData();
      formData.append("proName",pro.proName);
      formData.append("price",pro.price);
      formData.append("dis",pro.dis);
      formData.append("stock",pro.stock);
      pro.images.forEach((file)=>{
        formData.append("images",file);
      })
axios.post("http://localhost:3000/p",formData)
      .then((res)=>{
        console.log(res)
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
        <Typography variant='h4'> 
            Welcome to Admin Page
        </Typography>
        <form>
                        <TextField 
                            fullWidth
                            label='Product Name'
                            margin='normal'
                            color='secondary'
                            name='proName'
                            onChange={inputHandler}
                            />
                           
                        <TextField 
                            fullWidth
                            label='price'
                            margin='normal'
                            color='secondary'
                            name='price'
                            onChange={inputHandler}
                         /> 
                        <TextField 
                            fullWidth
                            label='Discription'
                            margin='normal'
                            color='secondary'
                            name='dis'
                           onChange={inputHandler}
                         />
                          <TextField 
                            fullWidth
                            label='stock'
                            margin='normal'
                            color='secondary'
                            name='stock'
                           onChange={inputHandler}
                         />
                         <Button variant='outlined' >
                            Upload Images
                           <input
                           type='file'
                          //  hidden
                           multiple
                           accept='image/*'
                           onChange={(e)=>{
                            setPro({...pro,images:Array.from(e.target.files)})
                           }}

                           />
                         </Button>
                        <Button
                            variant='contained'
                            color='secondary'
                            fullWidth
                            sx={{mt:2}}
                           onClick={submitHandler} 
                        >
                            SignUp
                        </Button> 
                    </form>

      </Box>
      </Container>
    </div>
  )
}

export default Admin

