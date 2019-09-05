import React, {useState , useEffect} from 'react';
import axios from 'axios';
import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,BoxDiv,Image,Overlay,OverlaySpan} from './style.js'
const Portfolio = () => {
const [Images, setImages] = useState([]);
useEffect( () => {
  axios.get('js/data.json').then(res => {
    setImages(res.data.portfolio)
  })
},[])
  const portfolioList = Images.map( u => {
    return (
      <BoxDiv key={u.id}>
          <Image src={u.image} alt=""/>
          <Overlay>
              <OverlaySpan>
                  Show Image
              </OverlaySpan>
          </Overlay>
      </BoxDiv>
    )
  })
    return (
      <PortfolioSection>
              <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
              <PortfolioList>
                  <PortfolioItem active>All</PortfolioItem>
                  <PortfolioItem>HTML</PortfolioItem>
                  <PortfolioItem>Photoshop</PortfolioItem>
                  <PortfolioItem>Wordpress</PortfolioItem>
                  <PortfolioItem>Mobile</PortfolioItem>
              </PortfolioList>

              <div className="box">
     {portfolioList}
              </div>
          </PortfolioSection>

    );
}

export default Portfolio;
