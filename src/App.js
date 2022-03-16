import Nav from "./component/Nav";
import AllPages from "./pages/AllPages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./component/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <BrowserRouter>
      <UpNav>
        <GiKnifeFork />
        <Logo to={"/"}>Your Chef</Logo>
      </UpNav>
      <Search />
      <Nav />

      <AllPages />
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two";
`;

const UpNav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
