var m = require("mithril");
var Image = require("../models/Image");

module.exports = {
    oninit: async (vnode) => {
        let image = new Image();
        await image.loadList(vnode);
        vnode.state.data = image.list;
    },
    view: function(vnode) {
        if (vnode.state.data) {
            let image = {};
            image.list = vnode.state.data
            image.list = image.list.slice(0, 12);
            return m("div", {class: "wrapper"}, [
                image.list.map((image, index) => {
                    return m("div", {class: `box box-style-${vnode.attrs.randomArray[index]}`}, [
                        m("img", {src: `https://picsum.photos/id/${image.id}/600/400`}), 
                        m("div", {class: "author"}, [
                            m("span", image.author ),
                        ]),
                    ])
                })
            ]);
        }
    }
}
