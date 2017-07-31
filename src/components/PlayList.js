import React, { Component } from 'react';
import PlayListItem from './PlayListItem';

class PlayList extends Component {
    constructor(props){
        super(props)

        this.fetchData = this.fetchData.bind(this)

        this.state = {
            songs: []
        }
    }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
      .then(results => {
        return results.json();
      })
        .then(data => {
          this.setState({song: data});
          console.log("state", this.state.songs);
        })
  }


  fetchData(e) {
   e.preventDefault();
   fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
   .then(results => {
     return results.json();
   })
   .then(data => {
     this.setState({songs: data});
     console.log(this.state.songs);
   })
  }

  render() {
    return (
      <div className = "container" >
        <form className="button">
          <button onClick={this.fetchData} type="button" className="btn btn-success">Update List</button>
        </form>
        <PlayListItem songs={this.state.songs}/>
      </div>
      )
   }
}




export default PlayList;
