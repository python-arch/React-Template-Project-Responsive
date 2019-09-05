import Styled from 'styled-components'
export const NavbarSection = Styled.div`
padding: 20px 0;
overflow: hidden;
background: #fff;
position: relative;
border-bottom: 1px solid #000
` ;
export const Logo = Styled.div`
width: 50%;
float: left;
@media (max-width : 1125px) {width: 75%}
`;
export const LogoText = Styled.h2`
font-size: 30px;
font-weight: bold;
@media (max-width : 1125px) { font-size : 20px;}
`;
export const UlList = Styled.ul`
width: 50%;
float: left;
list-style: none;
padding: 0;
@media (max-width : 1125px) { width : 25%; margin-top:8px}
@media (max-width : 600px) { width : 25%; margin-top:-6px}
` ;
 export const ListItem = Styled.li`
 display: inline-block;
`;
export const Link = Styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover {
      color: #eb5424
    }
    @media (max-width :1125px) {display: none;}
`;
