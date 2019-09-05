import React,{Component} from 'react';
import axios from 'axios'
import {Socialmediaa,Social,Icon,Pa,Span1,Span2} from './style.js'
class Socialmedia extends Component {
  state={
    social: [ ]
  }
  componentDidMount () {
    axios.get('js/data.json').then( u=> {
      this.setState({
        social: u.data.social
      })
    })
    console.log(Social)
  }
  render(){
    const {social} = this.state;
    const map1 = social.map(p => {
      return (
        <Social key={p.id} item={p.id}>
            <Icon className={p.icon}></Icon>
            <Pa>
                <Span1>{p.title}</Span1>
                <Span2>{p.body}</Span2>
            </Pa>
        </Social>
      )
    })
    return (
      <Socialmediaa>
{map1}
              </Socialmediaa>

    );
  }
}

export default Socialmedia;
