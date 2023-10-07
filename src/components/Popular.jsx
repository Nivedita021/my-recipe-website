import React from 'react';            
import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';
import { CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Card, Box } from '@mui/material';
function Popular()
{
    const [popular, setPopular] = useState([]);
    useEffect(()=>{
getPopular();
    },[]);
    const getPopular = async () =>{
        const check= localStorage.getItem("popular");
        if(check){
            setPopular(JSON.parse(check));}
            else{
                const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
                const data= await api.json();
                localStorage.setItem("popular", JSON.stringify(data.recipes));
                setPopular(data.recipes);
            }
        
       
    };
    return (
        <div>
       
       
<Wrapper>
    <Typography variant='h4' sx={{m: 3}}>
        Popular Picks
    </Typography>
    <Splide options={{
        perPage:3,
        arrows:false,
        pagination:false,
        gap: "1rem",
        drag:'free',
    }}>
    {popular.map((recipe)=>{
        return(
            <SplideSlide>
                <Box sx={{m:2}}>
<Card>
    <Link to={"/recipe/" + recipe.id}>
    
         
    <CardMedia image={recipe.image} title={recipe.title} component="img" />
  <CardContent>  <Typography variant='body1'> {recipe.title}</Typography>
  </CardContent>
    </Link>
</Card>
</Box>
</SplideSlide>
        );
    })}
    </Splide>
</Wrapper>
        
      
        </div>
    );
}
const Wrapper= styled.div`
margin: 4rem 0rem;
`;

const Gradient=styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));



`;
export default Popular;