import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Saved from './Saved';

class Greeting extends React.Component {
    state = {
      hour: null,
      greeting:"",
      username: 'Virginia'
    }
    
    componentDidMount() {
      this.getHour()
    }
  
    getHour = () => {
     const date = new Date();
     const hour = date.getHours()
     this.setState({
        hour
     });

     if(hour <12){
        this.setState({
            greeting: "morning"
        });
     } 
     if (hour >= 12 && hour <= 18){
        this.setState({
            greeting: "afternoon"
        });
     }
     if (hour >= 18 && hour <= 24){
        this.setState({
            greeting: "evening"
        });
     }

    }
  
    render(){
      const {hour, greeting, username} = this.state;
      return (
        <div>
          <h2>{`Good ${greeting}, ${username}!`}</h2>
        </div>
      );
    }
  
  }

class Timer extends React.Component{
    state = {
        date: new Date()
    };

    updateTime(){
        setInterval(() => {
            this.setState({date: new Date()});
        },1000)
    }

    render(){
        return(
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                {this.updateTime()}
            </div>
        )
    }
}


class Home extends React.Component {
  adviceRef = React.createRef();

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

  _handleNewAdvice = (e) => {
      let newAdvice = this.state.advice;
      console.log(newAdvice);
      this.props.addNewAdvice(newAdvice);
      e.preventDefault();
      
  }

  render() {
    const { saved } = this.props;
    return (
      <div className="app">
        <div className="card">
          <Timer/>
          <Greeting/>
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Another advice!</span>
          </button>
          <button className="button" onClick={this._handleNewAdvice}>
            <span>Save advice</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    saved: state.saved
})

const mapDispatchToProps = dispatch => ({
    addNewAdvice: save => dispatch({ type: 'SAVE', save })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
