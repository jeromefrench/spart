var m = require("mithril");
var Layout = require("./Layout");
let buildRandomArray = require("../utile/Random.js");

let count = 2;
let offset = 5;
let bool = false;
let randomArray = [];

randomArray[1] = buildRandomArray();
randomArray[2] = buildRandomArray();

module.exports = {
    view: function() {
        window.addEventListener('scroll', () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (clientHeight + scrollTop >= scrollHeight - offset) {
                if (!bool) {
                    bool = true;
                    count = count + 1;
                    randomArray[count] = buildRandomArray();
                    m.redraw();
                    setTimeout(() => { 
                        bool = false;
                    }, 1000);
                }
            }
        })
        let array = []
        let i = 1;
        while(i <= count) {
            array.push(m(Layout, {page: i, randomArray: randomArray[i]}));
            i = i + 1;
        }
        return m("div", array);
    }
}
