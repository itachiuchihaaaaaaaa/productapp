import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Admin = () => {

   const baseURl = import.meta.env.VITE_API_BASE_URL

    var navigate = useNavigate();
    var {state} = useLocation();
    console.log("state",state);
    const editingPro = state?.val;
    var[pro,setPro] = useState({
      proName:"" ,
       price:"",
         dis:"",
         stock:"",
         images:[]                    
  });

  useEffect(()=>{
    if(editingPro){
    const {proName,price,dis,stock} =editingPro;
    setPro({
      ...pro,
      proName:proName || "",
      price:price || "",
      dis:dis || "",
      stock:stock || "",
      images:[]
    })
  }
  },[])

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
      if(editingPro){
      //  console.log(editingPro._id);
      axios
        .put(`${baseURl}/p/${editingPro._id}`,formData)
          .then((res)=>{
            alert(res.data.message);
            navigate('/p')
          })
          .catch((err)=>{
            console.log(err)
          })

      }else{
      axios
        .post(`${baseURl}/p`,formData)
        .then((res)=>{
        console.log(res)
        alert(res.data.message);
        navigate('/p');
        })
        .catch((err)=>{console.log(err)})
      }
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
                            value={pro.proName}
                            onChange={inputHandler}
                            />
                           
                        <TextField 
                            fullWidth
                            label='price'
                            margin='normal'
                            color='secondary'
                            name='price'
                            value={pro.price}
                            onChange={inputHandler}
                         /> 
                        <TextField 
                            fullWidth
                            label='Discription'
                            margin='normal'
                            color='secondary'
                            name='dis'
                            value={pro.dis}
                           onChange={inputHandler}
                         />
                          <TextField 
                            fullWidth
                            label='stock'
                            margin='normal'
                            color='secondary'
                            name='stock'
                            value={pro.stock}
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

