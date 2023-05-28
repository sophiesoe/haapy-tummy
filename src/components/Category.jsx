import React from 'react';
import {GiFullPizza, GiChiliPepper, GiNoodles, GiSteak} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
            <GiFullPizza/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <GiSteak/>
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
            <GiChiliPepper/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Korean"}>
            <GiNoodles/>
            <h4>Korean</h4>
        </SLink>
    </List>
  )
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: #fff;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`;

export default Category