import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import  {useParams} from 'react-router-dom';

function Recipes() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async()=> {
    const data = await fetch (
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(()=> {
    fetchDetails();
  }, [params.name])
  return (
    <Wrapper>
      <div>
        <h2>{details.title}</h2>
        <Card>
        <img src={details.image} alt={details.title} />
        </Card>
        {activeTab === "instructions" && (
        <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
        )}
      </div>
      <Info>
      <Button className={activeTab === "instructions" ? "active" : " "} onClick={() => {
        setActiveTab("instructions")
      }}>Instructions</Button>
      <Button className={activeTab === "ingredients" ? "active" : " "} onClick={() => {
        setActiveTab("ingredients")
      }}>Ingredients</Button>
      {activeTab ==="instructions" &&(
        <div>
        <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
      </div>
      )}
      {activeTab === "ingredients" && (
        <ul>
        {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      )}
      </Info>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 10rem inherit 5rem;
  display: flex;
  @media (max-width: 1068px) {
    flex-direction: column;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 0.8rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    margin: 1rem 0;
    font-size: 12px;
    line-height: 1.8rem;
    &:first-child {
      margin-top: 2rem;
    }
  }
  p ol li {
    font-size: 0.7rem;
    line-height: 1.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
  @media (max-width: 1068px) {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;
const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 30rem;
  }
  `;

export default Recipes