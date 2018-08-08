import React, { Component } from "react";
import axios from "axios";

// Data

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authors: [],
      loading: true
    }
  }


  componentDidMount(){
    //this.setState({authors: authors})
    axios.get('https://the-index-api.herokuapp.com/api/authors/')
    .then (response => response.data)
    .then (data => this.setState({authors: data}))
    .then(ourresponse => this.setState({loading: false}))
    .catch (error => console.error (error));


    //this.updateState();
  }
  render() {
    let prompt;
    if (this.state.loading){
        prompt = <h1 style={{
          textAlign: "center",
          color:"red"
        }}> Page is Loading!!</h1>
    } else {
      prompt = <AuthorsList authors={this.state.authors} />
    }
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            {prompt};

          </div>
        </div>
      </div>
    );
  }
}

export default App;
