import React, { useState ,useEffect} from 'react';
import {motion} from 'framer-motion';
import styled  from 'styled-components';
import { Link,useParams } from 'react-router-dom';

function Cuisine() {

    const Card = styled.div`
    
   img{
  width:100%:
  
  border-radius:2rem;
   }

   h4{

    text-align:center;
    padding:1rem;

   }

   a{
       text-decoration:none;
      

   }


`;


    const [cuisine, setCuisine]= useState([]);
    let params = useParams();

 async function getNav(clickedItem){
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=553c3a63cdfd44fe858cb5d277e31bab&cuisine=${clickedItem}`);

      const data = await res.json();
      console.log(data.results);
      setCuisine(data.results);

  }

  useEffect(() => {
    getNav(params.type)
    //console.log(params)
  },[params.type] )
  
    return (
      <Grid
       
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:1}}
      transition={{duration:0.5}}
      >

          {
              cuisine.map((item)=>{
                  return(
                   < Link to={"/recipe/"+ item.id}>
                     <Card>
                         <img src={item.image} alt={item.title} />
                         <h4>{item.title}</h4>
                     </Card>
                     </Link>
                  )
              })
          }

      </Grid>
    );




    















}


const Grid = styled(motion.div)`
   display:grid;
   grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
   grid-gap:3rem:


`;


export default Cuisine;