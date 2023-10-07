import { useEffect,useState } from "react";
import styled from'styled-components';
import {useParams} from 'react-router-dom';
import React from 'react';
import HoverRating from "../components/Rating";
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import { Button, CardMedia,Card,CardHeader, Grid,List, ListItem, ListItemText, Box, Typography, ListItemButton, Paper, Container, CardContent } from "@mui/material";


function Recipe(){
    let params=useParams();
    const [details, setDetails] =useState({});
    const [activeTab, setActiveTab] =useState('instructions');
    const fetchDetails= async() => {
        const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
const detailData=await data.json();
setDetails(detailData);
    };
    useEffect (() =>{
        fetchDetails();

    }, [params.name]);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


    return(
      <Container fixed >
        
        <Card>
        <CardHeader
  
        title={details.title}
    
      />
        
        
       
       <CardMedia
        sx={{ p: 10, borderRadius: 2}}
        component="img"
        image={details.image}
        title={details.title}
      />
     <CardContent>
     <Box
        display="flex" 
        width={500} height={80} 
         m="auto"
      >
        <Box m="auto">
        <Typography variant="h6"> Rate the Recipe :</Typography> <HoverRating/> 
        </Box>
        
      </Box>
      <Grid m="auto">
        <Button sx={{ height: 40, width: "auto",  ml: 1}} color="secondary" size="medium" variant={activeTab === 'instructions' ? 'contained' : 'outlined'} onClick={() => setActiveTab('instructions')}>Instructions</Button>
                <Button sx={{ height: 40, width: "auto",  ml: 1}} color="secondary" size="medium" variant={activeTab === 'ingredients' ? 'contained' : 'outlined'} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        </Grid>   
              
           {activeTab === 'instructions' && (
              <div>
              <br />
              <br />
              <Typography variant="body1" sx={{p: 1}} paragraph dangerouslySetInnerHTML={{__html: details.summary}}>
                 
              </Typography >
              <br />
              <br />
              <Typography variant="body1" sx={{p: 1}} paragraph dangerouslySetInnerHTML={{__html:details.instructions}}>

              </Typography>
             </div>
           )}
         {activeTab === 'ingredients' && (
 <List sx={{mt:5}}>
 {details.extendedIngredients.map((ingredient) =>(
     <ListItemButton key={ingredient.id} selected={selectedIndex === ingredient.id} >
        <MenuBookSharpIcon sx={{mr: 2}}/>
        {ingredient.original}</ListItemButton>
 ))}

</List>
         )};
          </CardContent>
          </Card> 
            </Container>
    );
}


export default Recipe;