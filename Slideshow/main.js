var i = 0;
var images = [];
var size = 4;
images[0] = 'cow1.jpg';
images[1] = 'cow2.jpg';
images[2] = 'cow3.jpg';
images[3] = 'cow4.jpg';
images[4] = 'cow5.jpg';


function changeImage(n){

  i = i + n;

  if(i > size){
    i = 0;
  }
  if(i < 0){
    i = size;
  }

  document.slideshow.src = images[i];
  return false;


}
