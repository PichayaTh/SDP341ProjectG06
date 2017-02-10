function  randomTime() {
    return Math.random()*5000
}

function a(cb){
    setTimeout(function(){
        cb("a");
    },randomTime());
}

function b(cb){
    setTimeout(function(){
        cb("b");
    },randomTime());
}

function c(cb){
    setTimeout(function(){
        cb("c");
    },randomTime());
}

function d(cb){
    setTimeout(function(){
        cb("d");
    },randomTime());
}

/*a(function (result) {
    console.log(result);
    b(function (result) {
        console.log(result);
        c(function (result) {
            console.log(result);
            d(function (result) {
                console.log(result);
});
});

});

});

*/

