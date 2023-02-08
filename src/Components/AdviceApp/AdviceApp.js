import React from "react";
import axios from 'axios';
import './AdviceApp.css';

class AdviceApp extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="AdviceApp">
        <div className="advice-card">
          <h1 className="advice-heading">{this.state.advice}</h1>
          <button className="advice-button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default AdviceApp;