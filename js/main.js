// trending Item => show more images and hidden more images
let showImages = document.querySelectorAll('.trendingItem .hidden');
let moreBtn = document.querySelector('.trendingItem .buttons-trending .more');
let lessBtn = document.querySelector('.trendingItem .buttons-trending .less');

moreBtn.addEventListener('click', function(){
    for(let i=0;i<=showImages.length;i++){
        showImages[i].style.display = "block";
        moreBtn.style.display = "none";
        lessBtn.style.display = "inline-block";

        if(showImages[i].style.display = "block"){
            lessBtn.addEventListener('click', function(){
                showImages[i].style.display = "none";
                moreBtn.style.display = "inline-block";
                lessBtn.style.display = "none";
            });  
        }
    }   
});
