// src/index.js
require("./styles.css");
var m = require("mithril")

var UserList = require("./views/UserList")

m.mount(document.body, UserList)
