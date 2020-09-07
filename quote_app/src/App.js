import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const bgColors = [
  "#ef476f", "#f6aa1c", "#06d6a0", "#118ab2", "#073b4c"
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "black",
      quote: "",
      author: "",
      image: ""
    }
    this.getQuote = this.getQuote.bind(this);
  }
  

  setBackground() {
    let x = Math.floor(Math.random() * 5);
    this.setState({
      bgColor: bgColors[x]
    });
  }

  getQuote() {
    let request = new XMLHttpRequest();
    let requestURL = "https://thesimpsonsquoteapi.glitch.me/quotes";
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    let quoteObj = "";
    request.onload = function () {
      // const quote = JSON.parse(request.response[0]);
      quoteObj = request.response[0];
      console.log(quoteObj["quote"]);
      let updateState = () => {
        this.setState({
          quote: quoteObj["quote"],
          author: quoteObj["character"],
          image: quoteObj["image"]
        });
      };
      updateState();
    }.bind(this);

  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    document.body.appendChild(script);
    this.getQuote();
    this.setBackground();
  }
  render() {
    document.querySelector("body").style.backgroundColor = this.state.bgColor;
    document.querySelector("body").style.color = this.state.bgColor;
    console.log(this.state.image);
    let quoteUrl = "twitter.com/intent/tweet?text=" + this.state.quote;
    return (
      <div >
        <div id="quote-box">
          <img src={this.state.image} alt="new" />
          <div className="text-Space">
            <h1 id="text">
              "{this.state.quote}"
            </h1>
            <h3 id="author"> -{this.state.author} </h3>
            <div className="myRow">
              <button className="button" id="new-quote" onClick={this.getQuote}> New Quote </button>
              <a href={quoteUrl} id="tweet-quote"> <FontAwesomeIcon icon={faTwitterSquare}>Tweet Me</FontAwesomeIcon></a>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
