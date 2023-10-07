import React from 'react';      
import Popular from "../components/Popular";
import Veg from "../components/Veg";
import {motion} from 'framer-motion';
import { Box, Card, Container } from '@mui/material';
      

function Home()
{
    return (
        
            <Container>
           <Veg />
           <Popular />
           </Container>
        
    );
}

export default Home;