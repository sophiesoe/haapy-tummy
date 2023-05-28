import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter, Link} from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import {RiGhostSmileLine} from 'react-icons/ri'

function App() {
  return (
    <BrowserRouter>
    <Nav>
      <RiGhostSmileLine/>
      <Logo to={"/"}>Happy Tummy</Logo>
    </Nav>
    <Search/>
      <Category/>
      <Pages/>
    </BrowserRouter>
  );
}
const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Playball', cursive;
  margin-left: 0.5rem;
`;


export default App;
