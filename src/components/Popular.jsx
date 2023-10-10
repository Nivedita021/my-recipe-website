import React from 'react';            
import { useState } from 'react';
import { useEffect } from 'react';
import {motion} from 'framer-motion';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';
import { CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import styled from 'styled-components';

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
<>
    <Typography variant='h4' sx={{m: 3}}>
        Popular Picks
    </Typography>
    <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
       {
        popular.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt="" />
                    <Typography variant='h6'>{item.title}</Typography>
                    </Link>
                </Card>
            )
        })
       }
        </Grid>        
        </>
       
    );
}

const Card =styled.div`
img{
    width:100%;
    height:80%;
    border-radius:2rem;
   
}
a{
  text-decoration: none;  
}
h6{
    text-align: center;
    padding: 0.5rem;
}
`;
const Grid=styled(motion.div)`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
grid-gap:1rem;
`;
export default Popular;
