import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    const getSearched = async (name) => {
        const data = await fetch (
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };
    useEffect(() => {
        getSearched(params.search)
    }, [params.Searched])
  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return (
                <Card key={item.id}>
                  <Link to={"/recipes/" + item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  text-align: center;
  gap: 3rem;
`;

const Card = styled.div`
  img {
    width: min(400px, 100%);
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched