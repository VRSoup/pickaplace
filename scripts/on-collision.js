//using A-frame Physics Engins      
//handling for "head" collisions
//then emit the scene change from colliding objects parent via the color-sky component

      AFRAME.registerComponent("on-collision", {
        
          init: function () {
          let el = this.el;
        
            
          el.addEventListener('collisions',  (e)=> {
        
              
             e.detail.els[0].emit("set"); //getting type-error, but works fine for now...
        
   
         });
        },
      });
