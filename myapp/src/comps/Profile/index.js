import React , {Component}from 'react';
import axios from 'axios'
import {ProfileSkills,Profilee,MainTitle,ProfileList,ProfileItem,Span,Skills,SkillsDesc,Bar,BarTitle,BarPerc,Parent,Sp1,Sp2,Sp3} from './style.js'
class Profile extends Component {
  state = {
    profile : [
     {
       id: 1,
       span: "Name",
       under : "Abdulrhman Amr"
     },
     {
       id: 2,
       span: "Birthday",
       under : "8/7/2003"
     },
     {
       id: 2,
       span:"Address" ,
       under : "Menofia"
     },
     {
       id: 3,
       span: "Phone",
       "under" :" 01111 248 496"
     },
     {
       id: 4,
       span: "Email",
       under : "amra51548@gmail.com"
     },
     {
       id: 5,
       span: "Website",
       under: "www.google.com"
     }
   ] ,
   skills : [
     {
      id: 4,
      name: "Bootstrap",
      per: "100%"
     },
     {
       id: 5,
       name: "CSS3",
       per : "90%"
     },
     {
       id: 6,
       name: "Photoshop",
       per : "80%"
     },
   ]
  }
render() {
  const {profile} = this.state;
  const map1 = profile.map( u => {
    return u.id == 5  ? (
      <ProfileItem key={u.id}>
          <Span>{u.span}</Span>
        <span className="web">{u.under} </span>
      </ProfileItem>
    ) : (
      <ProfileItem key={u.id}>
          <Span>{u.span}</Span>
        <span>{u.under} </span>
      </ProfileItem>
    )
  });
  const {skills} = this.state;
  const map2 = skills.map( u => {
    if(u.id === 4) {
    return(
      <Bar>
          <BarTitle>{u.name}</BarTitle>
          <BarPerc>{u.per}</BarPerc>
          <Parent>
              <Sp1></Sp1>
          </Parent>
      </Bar>
    ) } else if (u.id=== 5) {
      return(
      <Bar>
          <BarTitle>{u.name}</BarTitle>
          <BarPerc>{u.per}</BarPerc>
          <Parent>
              <Sp2></Sp2>
          </Parent>
      </Bar>
    ) }else {
      return (
        <Bar>
            <BarTitle>{u.name}</BarTitle>
            <BarPerc>{u.per}</BarPerc>
            <Parent>
                <Sp3></Sp3>
            </Parent>
        </Bar>
      )
    }
  })
    return (
      <ProfileSkills>
                  <div className="container">
                      <Profilee>
                          <MainTitle><span className="web">My</span>Profile</MainTitle>
                          <ProfileList>
                          {map1}
                          </ProfileList>
                      </Profilee>

                      <Skills>
                          <MainTitle>Some<span className="web">skills</span></MainTitle>
                          <SkillsDesc>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                          </SkillsDesc>
{map2}
                      </Skills>

                  </div>
              </ProfileSkills>

    );
  }
}

export default Profile;
