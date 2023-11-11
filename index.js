

const img = document.querySelector('.img');

img.addEventListener('mouseenter', () => {
  
  img.style.animation = 'scrol 2s linear infinite alternate both';
  

});

img.addEventListener('mouseleave', () => {
  img.style.animation = 'scrol 2s linear infinite alternate paused both';
});



