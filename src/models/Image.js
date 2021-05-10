var m = require("mithril")

let  Image = class {

    async loadList(vnode) {
        let page = 1;
        let data = await m.request({
            method: "GET",
            url: `https://picsum.photos/v2/list?page=${vnode.attrs.page}`,
        }).then(function(result) {
            return result;
        }).catch(e => console.log('error=> ', e))
        this.list = data;
    }

}

module.exports = Image
