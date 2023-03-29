AFRAME.registerComponent('test', {
    schema: {
    },
    init: function() {
        let el = this.el;

        el.addEventListener('componentinitialized', () => console.log(el.id + " componentinitialized"))
        el.addEventListener('loaded', () => console.log(el.id + " loaded"))
        el.addEventListener('object3dset', () => console.log(el.id + " object3dset"))

    }

    });

