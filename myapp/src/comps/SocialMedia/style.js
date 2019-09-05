import Styled from 'styled-components'
export const Socialmediaa = Styled.div`
    height: auto;
    overflow: hidden
`;

export const Social = Styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background-color : ${props => props.item === 1 ? '#3b5998' : ''};
    background-color : ${props => props.item === 2 ? '#498cbf' : ''};
    background-color : ${props => props.item === 3 ? '#cc2127' : ''};
@media (max-width:991px) {width: 100%;
float: none;
padding : 50px 0 80px 40px;}
`;
export const Icon = Styled.i`
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    float: left;
    margin-right: 12px;
    margin-top: 21px;
    @media (max-width:991px){
      margin-top:0px
    }
`;

export const Pa  = Styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 19px;
    color: #fff;
    float: left;
    @media (max-width:991px){
      margin-top:0px
    }
`;

export const Span1 = Styled.span`
    display: block;
    margin-bottom: 8px
    `;

export const Span2 = Styled.span`
    font-weight: normal
`;
