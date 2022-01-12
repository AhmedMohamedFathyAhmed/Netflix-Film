import React, { Component } from 'react';
import axios from 'axios';
import Home from './home';


import { Route ,Switch ,Redirect} from 'react-router-dom';
import Tv from './tv';
import Movie from './movie';
import Notfound from './notfound';
import Navbar from './navbar';
import Register from './register';
import Login from './login';

export default class App extends Component {
    state = { 

        movies:[],
        tv:[], 
        
     }

     

    
     getTranding =async (mediaType)=>{

        let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
         console.log(data.results);
         this.setState({[mediaType]:data.results});
     }
 
 
     componentDidMount()
     {
 
         this.getTranding('movie');
         this.getTranding('tv');
         
 
     }
 


    render() { 
                    
        
        return ( 
        
            <React.Fragment>

                <div className="container py-5">         {/* الكوينتينر بتدى m-5 لل جواها كله */}

                <Navbar/>
                <Switch>

                <Route path="/home" exact render={(props)=> <Home {...props} trendingMovie={this.state.movie}  trendingTv={this.state.tv}/>}  />
                <Route path="/movie" component={Movie}  />
                <Route path="/tv" component={Tv}  />
                <Route path="/register"  component={Register}  />
                <Route path="/login" component={Login}  />
                <Route path="/notfound" component={Notfound}  /> 
                <Redirect path="/" exact to="/register"/>
                <Redirect to="/notfound" />                                       {/*  <Route path="*" to=/notfound  /> زى رى ديركت كده , الاستريك دى معناها كله , يعنى لو كتب اى حاجة*/}
                </Switch>
                
                                                                                        {/* ده العادى لما كنت ببعت لكمبوننت كنت بستخدم ده , بس لما استخدم باص بحطله البروبس فيها <Home trendingMovie={this.state.movie}  trendingTv={this.state.tv} />*/}
                </div>


                
            </React.Fragment>

        );
    }
}
 
 