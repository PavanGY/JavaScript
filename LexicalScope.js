// scope is directly related Lexical Env
//scope is where ever  we want to access any variable.
//Lexical env is Hierarhy of parent, where any variable can be retrived
//The hierachy of parent is know as Scope Chain
function a() {
    var b=10;

    c();
    function c(){

    }
    
}

a();
console.log(b)


