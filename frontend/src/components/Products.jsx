import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState, useSyncExternalStore } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
const Products = () => {
   const baseURl = import.meta.env.VITE_API_BASE_URL
    var navigate = useNavigate();
    var [products,setProducts] = useState([]);
    const [role,setRole] = useState(null)
    useEffect(()=>{
      const savedRole = sessionStorage.getItem("role");
      setRole(savedRole)
      axios 
        .get(`${baseURl}/p`)
        .then((res)=>{
          console.log(res.data)
          setProducts(res.data)})
        .catch((err)=>{console.log(err)})
    },[])

  const deletecard = (id)=>{
    axios
    .delete(`${baseURl}/p/${id}`)
    .then((res)=>{
        alert(res.data.message);
        window.location.reload();
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  
  const editPro = (val)=>{
    console.log(val)
    navigate('/a',{state:{val}})
  }

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((val,i)=>{
          return <Grid item sx ={12} md={6} key={i}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${baseURl}/uploads/${val.images[0]}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.proName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {val.dis}
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {val.price}
        </Typography> <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {val.stock}
        </Typography>
      </CardContent>
      <CardActions>
       {role==="admin" &&(
         <Button size="small" onClick={()=>{editPro(val)}}>Edit</Button>
       )}
       {role==="admin"&&(
         <Button size="small" onClick={()=>{deletecard(val._id)}}>Delete</Button>
       )}
      </CardActions>
    </Card>
          </Grid>
        })}

      </Grid>
    </div>
  )
}

export default Products

