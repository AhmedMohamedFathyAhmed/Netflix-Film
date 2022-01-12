import React, { Component } from 'react';

export default class Home extends Component {
    state = { }



    

     
             

    render() { 
        
        return(  
           
            <>
                 
            
            
        <div className="row ">
            
                <div  className="col-md-4 py-5">
                <div className="brdr w-25 mb-3"></div>
                <h3 >Trending<br></br>Movies<br></br>To Watch Right now</h3>
                <p className="my-3 ">Mostwatchedmoviebyday</p>
                <div className="brdr w-100 mb-3 "></div>
            

           

           
                </div>

            {this.props.trendingMovie.slice(0,10).map((trendingMovie)=>
                <div className="col-md-2" key={trendingMovie.id}>     {/* كل فيلم محتاج امسكه من حاجة فمسكته من ال اى دى وحطيه فى فاريبل كى */}
                <div className="vote position-absolute">{trendingMovie.vote_average}</div>
                <div className="movie"> 
                <img src={'https://image.tmdb.org/t/p/w500/'+trendingMovie.poster_path} className="w-100" alt=""/>   
                <h4 className="py-2 h6">{trendingMovie.title}</h4> {/* البوت ستراب عامله جواها كلاسات اتشات زى اتشات الاتش تى ام ال بالظبط*/}
                
                </div>
            </div>    
             
                )}
            

            


                
            
          <div  className="col-md-4 py-5">
                <div className="brdr w-25 mb-3"></div>
                <h3 >Trending<br></br>tv<br></br>To Watch Right now</h3>
                <p className="my-3 ">Mostwatchedmoviebyday</p>
                <div className="brdr w-100 mb-3 "></div>
            
           
          </div>



            {this.props.trendingTv.map((trendingTv)=>
                <div key={trendingTv.id} className="col-md-2">     {/* كل فيلم محتاج امسكه من حاجة فمسكته من ال اى دى وحطيه فى فاريبل كى */}
                <div className="vote position-absolute">{trendingTv.vote_average}</div>          {/* البوتستراب فى العادى بيكون عاطى للكلاس بوزيشن ريلتيف , ف الكلاس ده ريلتيف للى فوقه*/}
                <div className="movie"> 
                <img src={'https://image.tmdb.org/t/p/w500/'+trendingTv.poster_path} className="w-100" alt=""/>   
                <h4 className="py-2 h6">{trendingTv.title}{trendingTv.name}</h4> {/*  البوت ستراب عامله جواها كلاسات اتشات زى اتشات الاتش تى ام ال بالظبط ,....لما اعمل اتنين {}يبقى انا موجود عندى فى الداتا يا اما نيم يا اما التايتل*/}
               
                </div>
            </div>     
                 )}
            
            
  
            </div> 





          

            </>
            );
    }
} 