import React from 'react';            
import { useState } from 'react';
import { useEffect } from 'react';
import {motion} from 'framer-motion';
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';
import { Typography } from '@mui/material';

function Veg()
{
  const [veg, setVeg] = useState([]);
  useEffect(()=>{
getVeg();
  },[]);
  const getVeg = async () =>{
      const check= localStorage.getItem("veg");
      if(check){
          setVeg(JSON.parse(check));}
          else{
              const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`)
              const data= await api.json();
              localStorage.setItem("veg", JSON.stringify(data.recipes));
              setVeg(data.recipes);
          }
      
     
  };
    return (
     <>
          <Typography variant='h4' sx={{m: 3}}>
           Our Vegetarian Picks
          </Typography>
          <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
       {
        veg.map((item)=>{
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
    height:60%;
    border-radius:2rem;
   
}
a{
  text-decoration: none;  
}
h6{
    text-align: center;
    padding: 1rem;
}
`;
const Grid=styled(motion.div)`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
grid-gap:1rem;
`;
export default Veg;
