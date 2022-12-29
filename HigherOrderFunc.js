//Function that passes another function as parameter or returns another function

const radius =[1,2,3,4,5]

const area = function(radius){
    return Math.PI*radius*radius;
};

const Circumfernce = function (radius){
    return 2*radius*Math.PI;
};

const diameter = function (radius){
    return 2*radius;
};


const calculate= function (radius,logic){
    const output=[];
    for (let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    
return output;

};



const CaliculateArea= function (radius){
    const output=[];
    for (let i=0;i<radius.length;i++){
        output.push(Math.PI *radius[i]*radius[i]);
    }
    
return output;

};


console.log(CaliculateArea(radius));

console.log(radius.map(area));

console.log(calculate(radius,area));
console.log(calculate(radius,Circumfernce));
console.log(calculate(radius,diameter));
