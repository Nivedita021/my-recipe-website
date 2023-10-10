import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
function Search() {
    const[input, setInput]= useState("");
    const navigate= useNavigate();
    const submitHandler= (e) =>{
e.preventDefault();
navigate("/searched/" + input)
    };
return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
        <input placeholder='Search Favourite Recipes ...' onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
     
    </FormStyle>
);
}
 const FormStyle = styled.form`

 width: 100%;
 display: flex;
 justify-content: center;

 div{
 width:100%;
 position: relative;

 }

 input{
    border: none;
    background: linear-gradient(to right, #9d27b2, #6b067f);
    font-size:1.5rem;
    color: white;
    padding: 1rem 3rem;
    ::placeholder {
        color: white;
      }
    border: none;
    border-radius: 1rem;
    outline: none;
    width:100%;
 }
 svg{
    position: absolute;
    top:50%;
    left:0%;
    transform: translate(100%, -50%);
    color: white;
 }
 `;
export default Search;
