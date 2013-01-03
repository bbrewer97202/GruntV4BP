//FPO content spread over two files to see output
var f = (function() {
    var pancake = {
        one: 1,
        two: 2
    };
    console.log("pancake one=" + pancake.one);
})();

//FPO content spread over two files to see output
var db = (function() {    
    var _f = 2;
    var test = document.createElement('div');
    test.appendChild(document.createTextNode('testing 123'));
    document.body.appendChild(test);    
})();
