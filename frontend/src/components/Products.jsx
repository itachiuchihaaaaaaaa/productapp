import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState, useSyncExternalStore } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Products = () => {
    var [products,setProducts] = useState([]);
    useEffect(()=>{
      axios 
        .get("http://localhost:3000/p")
        .then((res)=>{
          console.log(res.data)
          setProducts(res.data)})
        .catch((err)=>{console.log(err)})
    },[])

  const deletecard = (id)=>{
    axios
    .delete(`http://localhost:3000/p/${id}`)
    .then((res)=>{
        alert(res.data.message);
        window.location.reload();
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((val,i)=>{
          return <Grid item sx ={12} md={6} key={i}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`http://localhost:3000/uploads/${val.images[0]}`}
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
        <Button size="small">Buy Now</Button>
        <Button size="small" onClick={()=>{deletecard(val._id)}}>Delete</Button>
      </CardActions>
    </Card>
          </Grid>
        })}

      </Grid>
    </div>
  )
}

export default Products

