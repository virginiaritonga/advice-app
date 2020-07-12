import React from 'react';

import ReactDOM from 'react-dom';



export default class Feedback extends React.Component{

  constructor(props) {

    super(props);   

    this.state={feedback:'', name:''};

 }

 nameChanged=(val)=>{

   this.setState({name:val});

 }



 feedbackChanged=(val)=>{

  this.setState({feedback:val});

}

 render(){

   return(

    <div>

    <h3>Give me your feedback for this app!</h3>

    <FeedbackInput feedback={this.state.feedback} onFeedbackChange={this.feedbackChanged}></FeedbackInput>

    <Name address={this.state.name} onNameChange={this.nameChanged}></Name>

    <SummaryComponent feedback={this.state.feedback} name={this.state.name}></SummaryComponent>

  </div>

   );   

 }

}



class FeedbackInput extends React.Component{

  constructor(props) {

    super(props);   

 }



 handleChange=e=>{

   this.props.onFeedbackChange(e.target.value);

 }

 render(){

   return (

     <div>

       <p>

         <form>
          <textarea type="text"  value={this.props.quantity}  onChange={this.handleChange}></textarea>
         </form>

       </p>

     </div>

   );

 }

}



class Name extends React.Component{

  constructor(props) {

    super(props);   

 }

 handleChange = e =>{

   this.props.onNameChange(e.target.value);

 };

 render(){

  return (

    <div>


      <p>

        <label>Name : <input value={this.props.address} onChange={this.handleChange}></input></label>

      </p>

      

    </div>

  );

}

 }

class SummaryComponent extends React.Component{

  constructor(props) {

    super(props);   

 }

 
 render(){

  return (

    <div >

      <p>

        <label>Thank you <b>{this.props.name}</b></label>

      </p>

      <button>Send Feedback</button>

    </div>

  );

 }

}




