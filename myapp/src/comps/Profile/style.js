import Styled from 'styled-components'

export const ProfileSkills = Styled.div`
    padding: 50px 0;
    overflow: hidden;
`;

 export const Profilee = Styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) { width: 100%;
float: none;   margin-bottom: 20px;}
`;

 export const ProfileList = Styled.ul `
    list-style: none
`;
 export const ProfileItem  = Styled.li`
    margin-bottom: 8px
`;
export const Span = Styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
`;
export const Skills = Styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) { width: 100%;
float: none}
`;
export const SkillsDesc = Styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`;
export const Bar = Styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`;

export const BarTitle =Styled.span`
    float: left;
`;

export const BarPerc  = Styled.span`
    float: right;
    margin-right: 100px
`;

export const Parent = Styled.div `
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`;

export const  MainSpan = Styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`;

export const Sp1  = Styled(MainSpan)`
    width: 100%;
`;
export const Sp2  = Styled(MainSpan)`
    width: 90%;
`;
export const Sp3  = Styled(MainSpan)`
    width: 80%;
`;
export const MainTitle = Styled.h2`
    font-size: 40px;
    margin-bottom: 20px
`;

export const PSpan = Styled.span`
    font-weight: normal;
`;
