import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Success=()=>{
 

const [search,setSearch]=useState([])
const [movie,setMovie]=useState("Bahubali")


const changeThesearch =(event)=>{

  if(event.target.value===""){
    setMovie()
  }
  else{

    setMovie(event.target.value);  
  }    

}

const getdetails =async()=>{
        const App_url=`https://api.themoviedb.org/3/search/movie?&api_key=7a719e5aad1e2729360a5723dd4f3959&query=${movie}`
        const response= await fetch(App_url)
        const data= await response.json()
        console.log(data)
        setSearch(data.results)
     
    
}    






useEffect(()=>{
getdetails()

})

return<>
<div className="container " >
  <div className="row mt-5">
    <div className="col-md-12 mt-auto">
    <input type="search" className="input  p-3" value={movie} onChange={changeThesearch}></input>
    </div>
  </div>
</div>
     {
       search.map((element)=>{
                
               return (
                  <div className="container "> 
                  <div className="row">
                    <div className="card mt-4 bg-dark text-light" style={{width:2000}}>
                <div className="card-body">
               <h5 className="card-title">{element.original_title}</h5>
              <p className="card-text">{element.overview}</p>
              <span className="fw-bold text-danger">Rating {element.vote_average}</span>
              <span className="fw-bold text-success ms-5">   Releasing Data {element.release_date}</span>
            </div>
</div>
                  </div>
                  </div>
              
               )                  


              })
           

              





     }



</>


}
export default Success;