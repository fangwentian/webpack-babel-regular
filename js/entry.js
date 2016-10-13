import Regular from "regularjs"
import '../css/entry.css'
let template = `<div class="container">子类覆盖</div>`

var comp = Regular.extend({
    template,
    config: function(data) {
        console.log("this is config");
    },
    init: function(data) {
        console.log("this is init");
    }
})
new comp().$inject('#_main');