import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.handleUserName = this.handleUserName.bind(this);
    this.handleSongArtist = this.handleSongArtist.bind(this);
    this.handleSongTitle = this.handleSongTitle.bind(this);
    this.handleSongNotes = this.handleSongNotes.bind(this);

    this.addToList = this.addToList.bind(this);

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
    }
  }

  handleUserName(e){
    this.setState({userName: e.target.value});
  }

  handleSongArtist(e){
    this.setState({songArtist: e.target.value})
  }

  handleSongTitle(e){
    this.setState({songTitle: e.target.value})
  }

  handleSongNotes(e){
    this.setState({songNotes: e.target.value})
  }

  addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songArtist: e.target.value, songTitle: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log(response, "yay");
  })
  .catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="userName">User Name:</label>
          <div className="col-md-10">
            <input onChange={this.handleUserName}
              type="text"
              className="form-control"
              id="userName"
              placeholder="Name or User Name"
              value={this.state.userName}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="songArtist">Artist/Band:</label>
          <div className="col-md-10">
            <input onChange={this.handleSongArtist}
              type="text"
              className="form-control"
              id="songArtist"
              placeholder="Artist or Band Name"
              value={this.state.songArtist}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="songTitle">Song Title:</label>
          <div className="col-md-10">
            <input onChange={this.handleSongTitle}
              type="text"
              className="form-control"
              id="songTitle"
              placeholder="Song Title"
              value={this.state.songTitle}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="songNotes">Notes about Song:</label>
            <div className="col-md-10">
              <textarea onChange={this.handleSongNotes}
                className="form-control"
                id="songNotes"
                value={this.state.songNotes}>
              </textarea>
            </div>
          </div>
          <div className="col-md-10">
            <button onClick={this.addToList} type="button" className="btn btn-primary">Submit</button>
          </div>
        </form>
    )
  }
}





export default PlayListForm;
