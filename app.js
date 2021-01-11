const url='www.omdbapi.com/?&apikey=1b2f34d9';
$(document).ready(function(){
$("#searchform").on('submit',function(e){
    e.preventDefault();
    
    const m=$("#searchtext").val();
    console.log(m);
    showmovies(m);



})
    
}



);
const j=$("#searchtext").val();

function showmovies(value){
    document.querySelector("#show-movie").style.display="none";
    let list=new XMLHttpRequest;
    list.open('GET','https://www.omdbapi.com/?apikey=1b2f34d9&s='+value);
    list.send();
    
    list.onload=function(){
        console.log("all done with request");
        const data=JSON.parse(this.response);
        console.log(data);
        console.log(data.Search.length);
      let output='';
      for(let k=0;k<data.Search.length;k++){
          output+=`
          
          <div class="col-6 col-sm-6    col-md-4  col-lg-4 col-xl-4">
          <div class="well text-center" > 
          <img src="${data.Search[k].Poster}" onclick="show(this.src)">
          <h4>${data.Search[k].Title}</h4>
          </div>
          
          
          </div>
        
          `
 }
      $("#movielist").html(output);
    var Posterarr=[];
    var Titlearr=[];
    for(let v=0;v<data.Search.length;v++){
        Posterarr.push(data.Search[v].Poster);
        Titlearr.push(data.Search[v].Title);
    }
    console.log(Posterarr);
    console.log(Titlearr);
    sendata(data.Search.length,Posterarr,Titlearr);

        
       
    
        
    
    
    }

    
    list.onerror=function(){
        console.log("pepepe error!!!")
       console.log(this)
    }
    
    
}
function sendata(size,imgarr,namearr){
    var s=size;
    var imgg=imgarr;
    var name=namearr;
    console.log(imgg);
    
    
}





function show(location){
 
let abc=$("#searchtext").val();
let req=new XMLHttpRequest;
 req.open("GET",'https://www.omdbapi.com/?apikey=1b2f34d9&s='+abc);
 req.send();
 req.onload=function(){
     const newdata=JSON.parse(this.response);

     
     for(let check=0;check<newdata.Search.length;check++)
{
    if(newdata.Search[check].Poster==location){var g=check;}
}
let reqq=new XMLHttpRequest;
reqq.open("GET","https://www.omdbapi.com/?t="+newdata.Search[g].Title+"&apikey=1b2f34d9");
reqq.send();
reqq.onload=function(){
    const newwdata=JSON.parse(this.response);
    console.log(newwdata);
   
   let link=newwdata.imdbID;
   console.log (link);
   document.querySelector("#show-movie").style.display="block";
   
   
   
    let out=`
    
    <div class="col-12 col-sm-6 bg-dark p-0">
    <img  src=${location}>

    </div>

    <div class="col-12 col-sm-6 bg-dark ">
    <h1 class="text-center text-white" > ${newdata.Search[g].Title} </h1>
    <h3 class="text-center text-white">${newwdata.Genre}</h2>
    <h3 class="text-center text-white">Director :${newwdata.Director}</h3>
    <h2 class="text-center text-white">Metascore :${newwdata.Metascore}</h2>
    <a style="display:block;font-size:2rem;" class="text-center text-white" href="https://www.imdb.com/title/${link}/">IMDB Link</a>
    
    
    </div>
    
    `
    $("#movie").html(out);
    document.documentElement.scrollTop = 0;


}
    
 }



    console.log(location);
    
    

    


    


}




