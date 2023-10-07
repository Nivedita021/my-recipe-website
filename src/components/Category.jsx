import{FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiCoolSpices} from 'react-icons/gi';
import styled from 'styled-components';
import React from 'react';
import {NavLink} from 'react-router-dom';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Typography } from '@mui/material';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import {Link} from '@mui/material';
import {Fab} from '@mui/material';
function Category(){
    return(
        <List>
            <Link href={'/cuisine/Italian'} underline="none">
            <Fab color="secondary" aria-label="edit" sx={{width: 97, height:97, m:2}}>
            <LocalPizzaIcon />
             Italian
              </Fab>
              </Link>
              <Link href={'/cuisine/American'} underline="none">
            <Fab color="secondary" aria-label="edit" sx={{width: 97, height:97, m:2}}>
            <LunchDiningIcon/>
             American
              </Fab>
              </Link>
              <Link href={'/cuisine/Thai'} underline="none">
            <Fab color="secondary" aria-label="edit" sx={{width: 97, height:97, m:2}}>
            <RamenDiningIcon/>
             Thai
              </Fab>
              </Link>
              <Link href={'/cuisine/Indian'} underline="none">
            <Fab color="secondary" aria-label="edit" sx={{width: 97, height:97, m: 2}}>
            <KebabDiningIcon/>
             Indian
              </Fab>
              </Link>
              
        </List>
    );
}
const List=styled.div`
display: flex;
justify-content:center;
margin: 2rem 0rem;
`;
const SLink=styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 100%;
margin-right:1rem;
padding: 5 rem;
text-decoration:none;
background:linear-gradient(to right, #9d27b2, #6b067f);
width:auto;
height:auto;
cursor:pointer;
transform: scale(0.7);

h4{
    color: white;
    font-size:1.3rem;
    
}
svg{
    
    color:white;
    font-size:2rem;
}
&.active{
    background: linear-gradient(to right, #f27121, #e94057);

    svg{
        color: white;
        
    }
    h4{
        color:white;
    }
}
`;
export default Category;