import React, { Component } from 'react';
import '../styles/payment_form.css';
import atm_card from "../assets/images/pexels-pixabay-259200.jpg";
import paypal from "../assets/icons/paypalicon.png";
import discover from "../assets/icons/discover_icon.png";
import visacard from "../assets/icons/visacardicon.png";

export class PaymentForm extends Component {
  state={
    addCard:{
      creditCardNumber:0,
      securityCode:0,
      cardForNextPurchase:false,
      expirationDate:0,
      postalCode:0
    }

  }

  setCardNumber = (number)=>{
    if(isNaN(number)){
      alert("Please enter only number");
    }else{
      const setNumber = {
        creditCardNumber:number
      }
      this.setState({addCard:Object.assign({},this.state.addCard,setNumber)})
    }
  }

  setSecurityCode = (number)=>{
    if(isNaN(number)){
      alert("Please enter only number");
    }else{
      
        const setNumber = {
          securityCode:number
        }

        this.setState({addCard:Object.assign({},this.state.addCard,setNumber)})

      }
      
  }

  setNextPurchase = (bool)=>{
   
      const setNextCard = {
        cardForNextPurchase:bool
      }
      this.setState({addCard:Object.assign({},this.state.addCard,setNextCard)})
  
  }

  setExpirationDate =(number) =>{
    if(isNaN(number)){

      alert("Please enter only number");

    }else{

      const setDate = {
        expirationDate:number
      }

      this.setState({addCard:Object.assign({},this.state.addCard,setDate)})
    }
  }

  setPostalCode = (number)=>{
    if(isNaN(number)){

      alert("Please enter only number");

    }else{

      const setPostal = {
        postalCode:number
      }

      this.setState({addCard:Object.assign({},this.state.addCard,setPostal)})
    }
  }

  fetchState= ()=>{
    const data = `${this.state.addCard.creditCardNumber} ${this.state.addCard.securityCode} 
                  ${this.state.addCard.cardForNextPurchase} ${this.state.addCard.expirationDate}
                  ${this.state.addCard.postalCode}`; 

    console.log(data);
  }

  render() {

    return (
      <div className='payment_body'>

        <div className='payment_header'>

          <div className='payment_header_texts'>
            <div className='payment_information_txt'>Payment information</div>
            <div className='payment_method_txt'>Choose your method of payment </div>
          </div>

          <div className='payment_header_icons'>
            <img src={visacard} alt='visacard' className='visacard_icon' />
            <img src={discover} alt='paypal' className='discover_icon' />
            <img src={paypal} alt='paypal' className='paypal_icon' />
          </div>
          
        </div>

        <div className='form_container'>

          <div className='atm_image'>
            <img src={atm_card} alt='atm' className='atm_card'/>
          </div>

          <div className='form_parent'>

            <div className='input_group'>

              <div className='cardnumber_securitycode'>
                    <label>Credit card number</label>
                    <input type='text' placeholder='xxxx xxxx xxxx xxxx' className='input_btn' onChange={(e)=>{
                        this.setCardNumber(e.target.value);
                    }}/>

                    <label>Security code</label>
                    <input type='text' placeholder='xxxx' className='input_btn' onChange={(e)=>{
                      this.setSecurityCode(e.target.value);
                    }}/>

                    <div className='next_purchase'>
                      <input type='checkbox' className='check_btn' onChange={(e)=>{
                        this.setNextPurchase(e.target.checked)
                      }}/>
                      Use this card for next purchase
                    </div>
              </div>

              <div className='expirationdate_postalcode'>

                    <label>Expiration date</label>
                    <input type='text' placeholder='mm/yy' className='input_btn' onChange={(e)=>{
                      this.setExpirationDate(e.target.value);
                    }}/>

                    <label>Postal code</label>
                    <input type='text' placeholder='xxxxxx' className='input_btn' onChange={(e)=>{
                      this.setPostalCode(e.target.value);
                    }} />

              </div>

            </div>
                
            <div>

              <button className='add_card' onClick={this.fetchState()}>Add card</button>
                
            </div>

        
            
          </div>

        </div>

        <div className='totals'>

          <div className='items'>
            <li>Subtotal</li>
            <li>Estimated TAX</li>
            <li>Promotional Code: <span className='promo_code'> DYKG578K</span></li>
            
          </div>

          <div className='cost'>
            <li>&#8358;2,497.00</li>
            <li>&#8358;119.64</li>
            <li>&#8358;-60.00</li>
          </div>
          
        </div>

        <div className='complete_payment'>
          <div className='gap complete_button_container'>
            
            <button className='complete_button'> Complete payment </button>
            
          </div>

          <div className='gap complete_total'>
            <li><span>Total</span>&#8358;2,556.64</li>
          </div>
          
        </div>

      </div>

      
    )
  }
}

export default PaymentForm