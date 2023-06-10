const submitBtn=document.querySelector('#submit-btn');
const model=document.querySelector('#myModal');
const movieShow=document.querySelector('#movie-added');



   



submitBtn.addEventListener('click',getMoviedata);

function getMoviedata(event){
    event.preventDefault();
    
    var form = document.getElementById('form');

    // Create a new FormData object and convert it to a JavaScript object
    var formData = Object.fromEntries(new FormData(form));

    // // Log the form data object
    console.log(formData);
    
    var modal = document.getElementById('myModal');
   const movieName= document.querySelector('#movie-name').value;
   const movieDescription= document.querySelector('#description').value;
   const movieUrl= document.querySelector('#img-url').value;
   const movieRating= document.querySelector('#rating').value;
     rander(movieName, movieDescription, movieUrl,movieRating);
     const formEl=document.querySelector('#form');
     formEl.reset();

     

}

function rander(movieName, movieDescription, movieUrl,movieRating)
{

   
  let  movieItem=`<div class="col-md-3" style="margin-left: 150px !important;">
  <div class="card" style="width:400px">
      <img class="card-img-top" src="${movieUrl}" alt="Card image" style="width:100%">
      <div class="card-body">
        <h4 class="card-title">Movie Name:- <span id="movieN">${movieName}</span></h4>
        <p class="card-text">Movie Description :-<span id="movieD">${movieDescription}</span> </p>
         <p class="card-text">Movie Rating:- <span id="movieR">${movieRating}/5</span></p>
      </div>
    </div>
  </div>`;

   movieShow.innerHTML +=movieItem;
  


}