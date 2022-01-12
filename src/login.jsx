import React, { Component } from 'react';
import Joi from 'joi';
import axios from 'axios';
import SecureLS from 'secure-ls';
import athentication from './athentication';
import { Redirect, Route } from 'react-router-dom';
import Home from './home';
var ls = new SecureLS({encodingType: 'aes'});
export default class Login extends Component {
    



    state = 
     { 
        email:"",
        password:"",
        error:""
     }

     writeForm =(e)=>                     
     {
 
          let state={...this.state};
 
          state[e.target.name]=e.target.value;                             /*  لما ادخل جوه النيم ك فاليو بستخدم [] */
 
          this.setState(state);
                                                                           /*التارجت هو الانبوت كله كل الحاجات دى جواه , الاى هيا الكلام اللى بيتكتب فى الانبوت تقريبا , انما الفاليو هيا القيمة اللى اتكتبت فعلا وانا ماسكها على بعضها*/
  
      }
 
 

     validationLoginData=()=>
     
     {
        let schema = Joi.object
        ({
                                  
          email: Joi.string().email({  tlds: { allow: ['com', 'net'] } }),
          password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
          
         });
 
         let state = {...this.state};
         delete state.error;
         return schema.validate(state , {abortEarly :false});
 
 
      }
      
      sendLoginData= async()=>
      {
        let state={...this.state};
        delete state.error;
 
        let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signin', state)
        
        
        if(data.message==='success')
        {

                ls.set('user1', data.token);

                athentication.logIn(
                    
                    ()=>this.props.history.replace('/home') ) ; 
                                                                        //لاحظ انى بوصل للفانكشن اللى مكان تانى عن طريق اسم الفايل اللى فيه , بس يكون الفايل بيرجع اوبجكت
                    <Route path="/home" component={Home}  />
                                                                             //لو هو اوسنتيكيشن وديه للهوم
           
        }  
        
        else
        {
           console.log("NOsuccess");
           athentication.logIn(
                    
            ()=>this.props.history.replace('/register') )  


           
        }

      }
 


     submitLoginForm=(e)=>
     {

        e.preventDefault();

        let responsValidationeLogin =this.validationLoginData();              /* لما استدعى فانكشن ب زيس ,خليك فاكر*/
        if( responsValidationeLogin.error)
        {
            let state= {...this.state};

            state.error=responsValidationeLogin.error;

            this.setState(state);


        }
        else
        {
            this.sendLoginData();
        }

     }

    render() { 
        return (
            
            
            <>
            <h1>Login</h1>
            <form onSubmit={this.submitLoginForm}>      { /* عشان لما اعمل اضغط على سبمت ميعميلش ريفرش للصفحة , وبالتالى يمسح كل البيانات, فانكشن اون سبمت بتعمل ريفرش للصفحة*/ }
           
            <lebal htmlFor="">email: </lebal>
            <input name="email" type="text" className="form-control" onChange={this.writeForm} value={this.state.email}></input>    
            
 
            <lebal htmlFor="">password: </lebal>
            <input name="password" type="password" className="form-control" onChange={this.writeForm} value={this.state.password}></input>    
            
            
            <button type="submit" className="btn btn-info mt-2">submit</button>
            </form>
            
            </>  );
    }
}
 
