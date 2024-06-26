  
  const title = document.querySelector('#title');
    const image = document.querySelector('#seasonImage');


function loadPage(season) {
 

    if (season == 'spring') {
        title.innerText = 'Welcome to Spring';
        image.src = 'assets/images/spring.png';
   
    }

     if (season == 'summer') {
        title.innerText = 'Welcome to Summer';
        image.src = 'assets/images/summer.png';
  
    } 

     if (season == 'fall') {
        title.innerText = 'Welcome to Fall';
        image.src = 'assets/images/fall.png';
    

    } 

   if (season == 'winter') {
        title.innerText = 'Welcome to Winter';
        image.src = 'assets/images/winter.png';
    
    } 

    if(season == 'allSeasons'){
        title.innerText = 'All of the Seasons';
        image.src ='';
        

    }


}