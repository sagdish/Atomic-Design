import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  filterBreeds(breeds) {
    const choiceBreeds = {
      hound: "hound",
      retriever: "retriever",
      terrier: "terrier",
      poodle: "poodle",
      setter: "setter"
    }

    return breeds.filter(breed => choiceBreeds[breed]);
  }
  
  
  
  render() {
    return(
      <div>
        <Options title="Breeds" list={this.state.breeds} />
      </div>
          );
  };
  
  
  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      console.log(response.data.message);
      this.setState(
        { breeds: this.filterBreeds(Object.keys(response.data.message)) });
      console.log(this.state.breeds);
    })
    
    
    .catch(error => {
      console.log(`error getting data from server: ${error}`);
    });
    
    
    
    
  }
  
}

export default Breeds;