

function sum() {
    let sumnum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sumnum+= arguments[i];
    }
    return sumnum;
}

function sum2(...arg) {
    let sumnum = 0;
    arg.forEach((ele)=>{sumnum+=ele});
    return sumnum;
}
// console.log(sum2(1,2,3))
// console.log(sum2(1,2,3,4))
// console.log(sum(1,2,3));
// console.log(sum(1,2,3,4));

Function.prototype.simpleMyBind = function(context) {
    // We want to use .apply
    // We want to use closure 
    // We want to return the original function 
    let that = this;
    function helper() {
        that.apply(context);
    }
    return helper;
}
Function.prototype.myBind = function(context,...args2) {
    // Add arguments using ...
    //
    let that = this;
    function helper(...args) {
        let both_args = args2.concat(args);
        that.apply(context,both_args);
    }
    return helper;
}
class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }

    meow() {
        console.log(`${this.name}`)
    }
}
  
class Dog {
    constructor(name) {
      this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.meow.bind(pavlov)()
markov.meow.simpleMyBind(pavlov)()
markov.says.myBind(pavlov)("meow","Ned")
markov.says.myBind(pavlov,"meow","Ned")()
markov.says.myBind(pavlov, "meow")("Markov");