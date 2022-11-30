import React from 'react'
import { Avatar,Card, CardContent, CardHeader,CardMedia,Typography,Box, IconButton } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Blog = ({title,description,imageURL,userName,isUser, id}) => {
  
  const navigate = useNavigate();
  const handleEdit=(e)=>{
    navigate (`/myBlogs/${id}`);
  }
  const deleteRequest= async ()=>{
    const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err=>console.log(err));
    const data = await res.data;
    return data
  }
  const handleDelete = ()=>{
    deleteRequest().then(()=>navigate("/")).then(()=>navigate("/blogs"));
  }
  return (
    <div><Card sx={{ width: "40%",margin:"auto",mt:2, padding:2,boxShadow:"5px 5px 10px #ccc","hover:":{
        boxShadow:"10px 10px 20px #ccc"
    }}}>
    {isUser &&(
      <Box display='flex'>
        <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><EditOutlinedIcon color="warning"/></IconButton>
        <IconButton onClick={handleDelete}><DeleteForeverIcon color="error"/></IconButton>
      </Box>
    )}
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          {userName.charAt(0)}
        </Avatar>
      }
      title={title}
      
    />
    <CardMedia
      component="img"
      height="250"
      image={imageURL}
      
    />
   
    <CardContent>
    <hr/>
    <br/>
      <Typography variant="body2" color="text.secondary">
        <b>{userName}</b>{":"}{description}
      </Typography>
    </CardContent>
  </Card></div>
  )
}

export default Blog