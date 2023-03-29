            AFRAME.registerComponent('exitvr', {
                init: function() {
                let scene = document.querySelector("a-scene"); 
                this.el.addEventListener('click',  () => scene.exitVR())
                //hasn't been tested...
                }
            });