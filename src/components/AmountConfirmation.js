import React from 'react';
import '../container/App.css';
import Header from '../components/Header.js';

class Otp extends React.Component {

    state = {
        enteredAmount:0
    }

     otpGen = () =>{
       let balance = Number(this.props.match.params.balance);
       let amount = Number(this.state.enteredAmount);

        // alert(amount<=balance);
        if((amount<=balance) && (amount>0)){
        let otp=Math.floor(Math.random()*900000+100000);
           this.props.history.push('/Otp'+otp);
       }else if (amount > balance){
           this.props.history.push('/Error'+this.props.match.params.balance);
       } else {
           let message = 'And more than 0 amount';
           this.props.history.push('/Error'+this.props.match.params.balance+' '+message);
       }
    }

       changeHandler = event => {
        this.setState(
            {
                enteredAmount: event.target.value
            })
       }

    render(){
        console.log(this.props);
    return(
       <div className="background">
        <Header titleText="Account Summary" isLoggedIn={true} history={this.props.history} />
        <div className='AmountConfirmation'>
            <p>Account Number : {this.props.match.params.AccountNo}</p>
            <p>Available Balance : £ {this.props.match.params.balance} </p>
            <p>Please enter the amount less than £{this.props.match.params.balance}</p>
            <input type='number' className='input' onChange={event => this.changeHandler(event)} />
            <br/>
            <br/>
            <button type='submit' onClick={this.otpGen}>Submit</button>
        </div>
        </div>
    )
}
}

export default Otp;
