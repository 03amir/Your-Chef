import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  //for style

  const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
  `;

  return (
    <List>
      <SLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const SLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  border-radius: 50%;
  flex-direction: column;
  background: linear-gradient(35deg, #494949, #313131);
  text-decoration: none;
  margin-right: 2rem;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Nav;
