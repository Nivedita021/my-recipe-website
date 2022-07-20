import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {GiCampCookingPot} from 'react-icons/gi';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiCampCookingPot />
        <Logo to={'/'} > DeliciousRecipes.Com !</Logo>
      </Nav>
      <Search />
     <Category />
   <Pages />
   </BrowserRouter>
    </div>
  );
}
const Logo= styled(Link)`
text-decoration:none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive; 
`;
const Nav= styled.div`
padding: 4rem 0rem;
display: flex;
justify-constent: center;
align-items: center;

svg{
  font-size: 4rem;
}

`;
export default App;
