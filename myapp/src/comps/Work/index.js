import React , {Component} from 'react';
import axios from 'axios'
import {WorkSection ,WorkTitle,Span,WorkPart,Icon ,PartTitle,Line,PartDesc} from './style.js'
 class Work extends Component {
   state = {
     works : [
     ]
   }
   componentDidMount () {
     axios.get("js/data.json").then( u => {this.setState({
       works : u.data.works
     })})
   }
   render() {
     const {works} = this.state;
     const List = works.map(u => {
       return (
         <WorkPart first={u.id} key={u.id}>
           <Icon className={u.icon_name}></Icon>
             <PartTitle>{u.title}</PartTitle>
             <Line/>
             <PartDesc>
              {u.body}
             </PartDesc>
         </WorkPart>
       )
     })
    return (
      <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {List}
            </div>
        </WorkSection>
    );
  }
}

export default Work;
