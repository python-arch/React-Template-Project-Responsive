import React from 'react';
import { HomeParent ,Information ,Title ,Info ,Desc ,Span,Button} from './style.js'
const Home = () => {
    return (
      <div className="main">
      <HomeParent>
          <div className="container">
              <Information>
                  <Title>Abdulrhman Amr</Title>
                  <Info>Creative Director</Info>
                  <Desc>
                      Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                  </Desc>
                  <Button>Let's Begin</Button>
              </Information>
          </div>
      </HomeParent>
      </div>
    );
}

export default Home;
