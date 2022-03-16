
import React,{useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import styled  from 'styled-components';

function Details() {

    const [details, setDetails]= useState({});
    const [ isActive, setIsactive]= useState("istraction");
    const [ingredients,setingredients] = useState([]);
    let params = useParams();

 async function getDetails(){
      const res = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=553c3a63cdfd44fe858cb5d277e31bab`);

      const data = await res.json();
      console.log(data.extendedIngredients);
      setDetails(data);
      setingredients(data.extendedIngredients)

  }

  useEffect(() => {
    getDetails(params.type)
    //console.log(params)
  },[params.id] )

     


    return (

     
        
            <DetailsWrapper>
         <div>
             <h2>{details.title}</h2>
             <img src={details.image} alt={details.title} />
         </div>

         <Info>
   <Button className={isActive=="istraction"? "active":""}onClick={()=>{
       setIsactive("istraction")
   }}>
       Instructions
   </Button>
   <Button className={isActive=="ingredients"? "active":""} onClick={()=>{
       setIsactive("ingredients")
   }}>
       Ingredients
   </Button>

   {
       isActive=="istraction"?(
        <div>
      
        <h3 dangerouslySetInnerHTML={{__html:details.summary}}>
        </h3>
        <h3 dangerouslySetInnerHTML={{__html:details.instructions}}>
        </h3>
    </div>

       ):

       <ul>
       {
          ingredients.map((item)=>{
              return(
                <li key={item.id}>
                {item.original}
            </li>
              )
            
          })
       }
   </ul>
   }

   

  

         </Info>


            </DetailsWrapper>
           
    );
}

const DetailsWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
    background:linear-gradient(35deg,#494949,#313131);
    color:white;
}
h2{
    margin-bottom:2rem;
}

li{
    font-size:1rem;
    line-height:2.5rem;
}

ul{
    margin-top:2rem;
}

h3{
    font-size:.9rem;

}

`;

const Button= styled.button`

padding:1rem 2rem;
background:white;
color:#313131;
border:2px solid black;
margin-right:2rem;
font-weight:600;
cursor:pointer;
`;
const Info= styled.div`

margin-left:10rem;

`

export default Details;