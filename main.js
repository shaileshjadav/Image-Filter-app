const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();





document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      
        if (e.target.classList.contains('brightness-add')) {
            Caman('#canvas',img,function () {
                this.brightness(10);
                this.render();
            });
        }
        else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas',img,function () {
                this.brightness(-10).render();
                
            });
        }
        else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas',img,function () {
                this.contrast(10).render();
                
            });
        }
        else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas',img,function () {
                this.contrast(-10).render();
                
            });
        }
        else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas',img,function () {
                this.saturation(15).render();
                
            });
        }
        else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas',img,function () {
                this.saturation(-15).render();
                
            });
        }
        else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas',img,function () {
                this.vibrance(15).render();
            });
        }
        else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas',img,function () {
                this.vibrance(-15).render();
             });
        }

        else if (e.target.classList.contains('multiply')) {
          
            Caman('#canvas',img,function () {
                this.exposure(-10);

                                    // Create the layer
                    this.newLayer(function () {
                        // Change the blending mode
                        this.setBlendingMode("multiply");

                    // Change the opacity of this layer
                    this.opacity(80);

    // Now we can *either* fill this layer with a
    // solid color...
    this.fillColor('#6899ba');

    // ... or we can copy the contents of the parent
    // layer to this one.
    this.copyParent();

    // Now, we can call any filter function though the
    // filter object.
    this.filter.brightness(10);
    this.filter.contrast(20);
  });
  // And we can call more filters after the layer
  this.clip(10);
  this.render();
             });
        }

        else if (e.target.classList.contains('curves')){
            Caman('#canvas',img,function () {
                // Using a string for the channel
  this.curves('rgb', [0, 0], [100, 120], [180, 240], [255, 255]);
  
  // Specifying individual color channels
  this.curves(['r', 'b'], [0, 0], [100, 120], [180, 240], [255, 255]);
  
  this.render();
                
             });
        }

        else if (e.target.classList.contains('gamma')){
            Caman('#canvas',img,function () {
                this.gamma(1.4).render();
                
             });
        }

        else if (e.target.classList.contains('hue')){
            Caman('#canvas',img,function () {
                this.hue(90).render();
                
             });
             
        }
    }
});


document.getElementById('download').click(function(){
    var Caman = require('caman').Caman;
    Caman("/path/to/file.png", function () {
        this.brightness(5);
        this.render(function () {
          this.save("/path/to/output.png");
        });
      });
});



//upload file
customFile.addEventListener('change', (e) => {
    const file = document.getElementById('customFile').files[0];
    // console.log(file);

    // init fileReader
    const reader = new FileReader();
    if (file) {
        fileName = file.name;
        // console.log(fileName);
        reader.readAsDataURL(file);

    }
    //set to canvas
    reader.addEventListener('load', () => {

        // create image
        img = new Image();
        // set src
        img.src = reader.result;

        // load image
        img.onload = function () {

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            ctx.font="20px Calibri";
            ctx.fillText("My Text",200,200);
            canvas.removeAttribute('data-caman-id');
        }


    }, false);



});

