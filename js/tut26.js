//constructor
function Cake(name,color,consistency){
    this.name=name;
    this.color=color;
    this.consistency=consistency;
}
Cake.prototype.slogan=function(){
    return `The color of ${this.name} is ${this.color} and consistency is ${this.consistency}`;
}

let cakeObj=new Cake('ChocolateCake','Choco','Light')
console.log(cakeObj);
console.log(cakeObj.slogan());

function Flour(name,color,consistency,quantity){
    Cake.call(this,name,color,consistency);
    this.quantity=quantity;
}

Flour.prototype=Object.create(Cake.prototype);

Flour.prototype.constructor=Cake;

let Obj=new Flour('VanillaCake','Vanilla','SoftSponge','Medium');
console.log(Obj);
console.log(Obj.slogan());