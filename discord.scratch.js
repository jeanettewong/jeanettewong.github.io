(function(ext) {
ext._shutdown = function() {};
ext._getStatus = function() {
return {status: 2, msg: "Ready"};
};
ext.my_first_block = function() {
console.log("ya yeet dab")
};
var descriptor = {
blocks: [
[' ', 'my first block', 'my_first_block'],
]
};
ScratchExtensions.register("My first extension", descriptor, ext);
})({});
