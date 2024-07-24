import React from 'react';
// import './ProductGrid.css'; // Import your CSS file
import Grid1 from '../assets/images/Grid1.png';
import Grid2 from '../assets/images/Grid2.png';
import Grid3 from '../assets/images/Grid3.png';
import Grid4 from '../assets/images/Grid4.png';
import Grid5 from '../assets/images/Grid5.png';
import Grid6 from '../assets/images/Grid6.png';
import styled from 'styled-components';
import Eco from './Eco';

const Container = styled.div`
  padding: 20px;
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: left;
  font-family:'serif';
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;


// const Gridimg = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 10px;
// `;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

// const Image1 = styled.img`
  
//   height: auto;
// `;


const ProductGrid = () => {
  const images = [Grid1, Grid2, Grid3, Grid4, Grid5, Grid6];
  // const images2= [Kesh, Eco];
  return (
    <>
      <Container>
        <Header className='mb-5 mt-4 px-lg-5'>
          <Title>The earth seems pretty pleased!</Title>
          <Button>Shop Now</Button>
        </Header>
        <div className='prod-grid'>
          {images.map((src, index) => (
            <div className='img-hover-zoom'>
            <Image key={index} src={src} alt={`Image ${index + 1}`} className='img'/>
            </div>
          ))}
        </div>
      </Container>
      <Container style={{ backgroundColor: '#ece9e2'}}>
        <Header className='mb-5 mt-4 px-lg-5'>
          <Title style={{ color: '#8f7f5f'}}>From earth we came to her retuneth</Title>
          <Button>Our materials</Button>
        </Header>
        <Eco/>
      </Container>
    </>
  );
};

export default ProductGrid;