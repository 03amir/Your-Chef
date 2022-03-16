import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veg() {
  const [veg, setVeg] = useState([]);

  async function getVeg() {
    const prevVeg = localStorage.getItem("veg");

    if (prevVeg) {
      setVeg(JSON.parse(prevVeg));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=4299f5cef7794dea9ef221860859ac02&number=9&tags=vegetarian`
      );
      const data = await res.json();
      localStorage.setItem("veg", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setVeg(data.recipes);
    }
  }

  useEffect(() => {
    getVeg();
  }, []);

  // for styling

  const Wrapper = styled.div`
    margin: 4rem 0rem;
  `;

  const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
      border-radius: 1.2rem;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    p {
      position: absolute;
      left: 50%;
      width: 100%;
      height: 40%;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      bottom: 0%;
      z-index: 10;
      text-align: center;
      transform: translate(-50%, 0%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  const Gradient = styled.div`
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  `;

  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Choice</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veg.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Veg;
