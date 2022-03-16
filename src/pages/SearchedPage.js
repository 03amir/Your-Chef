import React,{useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import styled  from 'styled-components';

function SearchedPage(props) {
    const [searched , setSearched]=useState([]);

     const params= useParams();

   async function getSearched(name){
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=553c3a63cdfd44fe858cb5d277e31bab&query=${name}`);
    const data = await res.json();
    console.log(data);
    setSearched(data.results)
   }

   useEffect(() => {
    //console.log(params.searched);
    getSearched(params.searched)
   }, [params.searched])
   

    return (
        <Grid>

          {
              searched.map((item)=>{
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
const Grid = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem:


`;

export default SearchedPage;