AFRAME.registerComponent('test', {
    schema: {
    },
    init: function() {
        let el = this.el;

        el.addEventListener('componentchanged', function (evt) {
            console.log("no chance");
        });



    }});

