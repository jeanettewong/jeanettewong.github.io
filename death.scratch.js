    (function(ext) {
ext._shutdown = function() {
client.destroy();
};
ext._getStatus = function() {
return {status: 2, msg: "Ready"};
};
ext.die = function(m) {};
var descriptor = {
blocks: [
[" ", "die lol", "die"]
]
};
ScratchExtensions.register("Death", descriptor, ext);
})({});
