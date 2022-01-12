import axios from 'axios';
import Joi from 'joi';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
export default class Register extends Component {
    state = { 

        first_name:"",
        last_name:"",
        email:"",
        password:"",
        age:"",
        error:""


     }

     writeForm =(e)=>                     
    {

         let state={...this.state};

         state[e.target.name]=e.target.value;                             /*  لما ادخل جوه النيم ك فاليو بستخدم [] */

         this.setState(state);
         console.log(e.target.value);                                   /*التارجت هو الانبوت كله كل الحاجات دى جواه , الاى هيا الكلام اللى بيتكتب فى الانبوت تقريبا , انما الفاليو هيا القيمة اللى اتكتبت فعلا وانا ماسكها على بعضها*/
 
     }

     validationData=()=>
     
     {
       let schema = Joi.object
       ({
                                 
         first_name: Joi.string().alphanum().min(3).max(30).required(),
         last_name: Joi.string().alphanum().min(3).max(30).required(),
         email: Joi.string().email({  tlds: { allow: ['com', 'net'] } }),
         password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
         age: Joi.number().integer().min(10).max(80).required(),
     
        });

        let state = {...this.state};
        delete state.error;
        return schema.validate(state , {abortEarly :false});


     }


     submitForm=(e)=>
     {

        e.preventDefault();                                                /*  بيمنع ان فانكشن سبمت تشتغل من بداية الرندر لانه مش هيكون دخل داتا*/
        
        let validationRespose=this.validationData();
        if(validationRespose.error )
        {
            let state={...this.state};
            state.error=validationRespose.error;
            this.setState(state);
        }
        else
        {
            this.sendData();
        }
        console.log(validationRespose);
     }

     sendData= async()=>
     {

       let state={...this.state};
       delete state.error;

       let {data}=await axios.post('https://route-egypt-api.herokuapp.com/signup',state);       /*اى اى بى اى  بتستقبل او الداتا بتاعتها بتكون جوا اوبجكت اسمه داتا , فانا ها هدستركت الداتا علطول اللى بعتها لل اى بى اى , واقوله لو فى فاريبل جوا الداتا اسمه ماسدج بيساوى سكسس , فدخله للوجن بيدج */

                     if(data.message==='success')
                     {
                        this.props.history.replace('/home');
                        
                     }  
                     
                     else
                     {
                        console.log("NOsuccess");
                        return <Redirect to="register"/>
                     }

     }
        


    render() { 

      
        return (

            <>
            <h1>Register</h1>
            {this.state.error&&<div className="alert alert-danger">{this.state.error.message}</div>}
            <form onSubmit={this.submitForm}>      { /* عشان لما اعمل اضغط على سبمت ميعميلش ريفرش للصفحة , وبالتالى يمسح كل البيانات, فانكشن اون سبمت بتعمل ريفرش للصفحة*/ }
            <lebal htmlFor="">Firstname: </lebal>
            <input name="first_name" type="text" className="form-control" onChange={this.writeForm} value={this.state.first_name}></input>    
            
            <lebal htmlFor="">lastname: </lebal>
            <input name="last_name" type="text" className="form-control" onChange={this.writeForm} value={this.state.last_name}></input>    
            

            <lebal htmlFor="">email: </lebal>
            <input name="email" type="text" className="form-control" onChange={this.writeForm} value={this.state.email}></input>    
            
 
            <lebal htmlFor="">password: </lebal>
            <input name="password" type="password" className="form-control" onChange={this.writeForm} value={this.state.password}></input>    
            
            <lebal htmlFor="">age: </lebal>
            <input name="age" type="number" className="form-control" onChange={this.writeForm} value={this.state.age}></input>  
            
            <button type="submit" className="btn btn-info mt-2">submit</button>
            </form>
            
            </>
          );
    }
}
 
