'use strict;'


const marks ={
    fullName : 'mark miller',
    marks : 78,
    height : 1.69,

    calcBMI : function(){
        return (this.marks/(this.height**2));
    }
};

// console.log(marks.calcBMI())

const jons ={
    fullName : 'john smith',
    marks : 92,
    height : 1.95,

    calcBMI : function(){
        return (this.marks/(this.height**2));
    }
};

// console.log(jons.calcBMI())

// console.log(marks.calcBMI() > jons.calcBMI() ? `${marks.fullName}`: `${jons.fullName}`);


console.log(marks.calcBMI() > jons.calcBMI() ? `${marks.fullName} is BMI (${marks.calcBMI()}) is heigerthan (${jons.calcBMI()})`: `${jons.fullName} is BMI (${jons.calcBMI()}) is heigerthan (${marks.calcBMI()})`);