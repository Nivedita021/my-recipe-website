import{FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiCoolSpices} from 'react-icons/gi';
import styled from 'styled-components';
import React from 'react';
import {NavLink} from 'react-router-dom';
function Category(){
    return(
        <List>
<SLink to={'/cuisine/Italian'}>
    <FaPizzaSlice />
    <h4>Italian</h4>
</SLink>
<SLink to={'/cuisine/American'}>
    <FaHamburger />
    <h4>American</h4>
</SLink>
<SLink to={'/cuisine/Thai'}>
    <GiNoodles />
    <h4>Thai</h4>
</SLink>
<SLink to={'/cuisine/Indian'}>
    <GiCoolSpices />
    <h4>Indian</h4>
</SLink>
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
border-radius: 50%;
margin-right:1rem;
text-decoration:none;
background: linear-gradient(35deg, #494949, #313131);
width:8rem;
height:8rem;
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