window.onload=function(){
    var context=document.getElementById('canvas').getContext('2d');


    var base_image=new Image();
    base_image.src = '../Image-filter/img/1.jpg';
    context.drawImage(base_image, 0, 0);
    // console.log(context);
    console.log(base_image);

};