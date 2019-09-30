import React from 'react';
import logo from './logo.svg';
import './App.css';
import { nav } from 'materialize-css';
import SingleMessage from './components/singleMessage';
import NavBar from './components/navBar';

class App extends React.Component {
  state = {
    exampleMessages: [
      {
        msg: "message1",
        user: "juda"
      },
      {
        msg: "message2",
        user: "christ"
      }
    ]
  }
  handleInputs = () => {

  }
  constructor() {
    super();
  }
  render() {
    return (
      <body>
        <NavBar />
        <div class="section no-pad-bot" id="index-banner">
          <div class="container">
            <div id="chatDiv" />
            <ul class="collection" id="chatList">
              <li class="collection-item avatar">
                <i class="material-icons circle red">play_arrow</i>
                <span class="title">Title</span>
                <br />
                <p>{new Date().toString()}</p>
                <b>Bold text</b>
                {/* <p>First Line in a long time</p> */}
              </li>
            </ul>
          </div>
        </div>
        {this.state.exampleMessages.map((object, i) => {
          return <SingleMessage user={object.user} msg={object.msg} />
        })}
        <h1 class="header center orange-text" id="siteTitle">Multi-Chat!</h1>
        <div class="row">
          <div class="input-field col s12">
            <input value="" id="messageStream" type="text" class="password" />
          </div>
        </div>
        <div class="row center">
        </div>
        <div class="row center">
          <a href="https://github.com/simenghe" id="linkButton" class="btn-large waves-effect waves-light orange">Check
          out github</a>
        </div>
      </body>
    );
  }
}
export default App;
