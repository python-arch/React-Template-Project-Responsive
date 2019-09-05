import Styled from 'styled-components'
export const Creative = Styled.div `
    height: 500px;
    background: url('images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) { height: auto}
`;

export const Creativeinfo  = Styled.div`
    padding-top: 50px;
    width: 50%;
    float: right;
@media (max-width:991px) {
  width: 100%;
  padding-top: 5px;
  float: none;
}
`;

export const Infotitle =Styled.h2 `
    font-weight: bold;
    font-size: 50px;
    @media (max-width:991px) {font-size : 40px;}
`;

export const Span = Styled.span `
    font-weight: normal;
`

export const Infodir =  Styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    @media (max-width:991px) {font-size: 25px}
`;

export const Infodesc = Styled.p `
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
@media (max-width:991px) {font-size: 15px; line-height : 1.5}
`

export const A  = Styled.a`
    text-decoration: none
`;
