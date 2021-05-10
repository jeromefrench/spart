var m = require("mithril")

var Image = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://picsum.photos/v2/list",
        }).then(function(result) {
            Image.list = result.data
        })
    }
}

module.exports = Image

