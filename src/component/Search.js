import React, { useState } from "react";
import { FaSearch, FaUnsplash } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  async function submithndlr(e) {
    e.preventDefault();
    navigate("/search/" + input);
  }
  return (
    <FormStyle onSubmit={submithndlr}>
      <FaSearch />
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 3rem 20rem;
  position: relative;
  width: 50%;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 4rem;
    outline: none;
    border: none;
    border-radius: 1rem;
    width: 100%;
  }

  svg {
    color: white;
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translate(100%, -50%);
  }
`;

export default Search;
