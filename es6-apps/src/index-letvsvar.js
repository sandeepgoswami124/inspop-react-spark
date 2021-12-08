//let vs var

function sayWelcome(msg) {
    var foo = 'e'
    //var myname;
    //block scope :how to implement block in js(es 5)
    if (msg) {
        // (function(){
        //     var myname = 'subramanian'
        // })();
        let myname = 'subramanian'
        //var myname = 'subramanian'
    }
    console.log(msg, myname);
}
sayWelcome('hello')
//console.log(foo);
