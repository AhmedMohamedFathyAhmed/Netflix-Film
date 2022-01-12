import React, { Component } from 'react';
import notfoundstyle from 'react';
export default class Notfound extends Component {
    state = {  }
    render() { 
        return ( 
                <>
            <section className="vh-100 d-flex justify-content-center align-items-center">
            <h1 className={`text-center ${notfoundstyle.bigFont}`}> go to home page</h1>
            
            </section>
            </>
         );
    }
}
 
